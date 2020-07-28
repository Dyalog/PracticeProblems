var debug = true;
var tioTest = "";
var runURL = "https://tio.run/cgi-bin/run";
var tioParams     = ["Vlang","1","apl-dyalog","Vargs","0","F.input.tio","0","F.code.tio"];
var runRequest;

$=s=>document.querySelector(s);
$$=s=>document.querySelectorAll(s);

log=text=>{if(debug){console.log(text)}}

function tioRequest(runURL, code, params) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", runURL, true);
    xhr.responseType = "arraybuffer";
    xhr.onload = function() {      
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }      
    };  
    xhr.onerror = function() {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };  
    var req = deflate(codeToByteString(code, params));
    xhr.send(req);
  });
}

async function submitSolution(id) {  
  let code = $('#'+id+"_Input").value;
  if (code.length) {
    let problem = {"P0": testCases[id]};
    var expr = tns + "\n" + importTestNS + "\n" + "p← ⎕JSON'" + JSON.stringify(problem).split("'").join("''") + "'\n" + "⎕←(p Test.Run)1'" + code.split("'").join("''") +  "'";
    // tioTest = expr;
    var result = await tioProcess(runURL, expr, tioParams);    
    tioTest = result; 
    $("#"+id+"_Output").innerHTML = result.replace(/`[^`]+`/,x=>'<code>'+x.split('`')[1]+'</code>').replace(/^\W. \s/,"");
  }
}

async function tioProcess(runURL, code, params) {  
  let response = byteArrayToByteString(new Uint8Array(await tioRequest(runURL, code, params)));  
  // if (statusCode >= 400) {sendMessage("Error " + statusCode, statusCode < 500 ? response || statusText : statusText);return;}
  try {
    var rawOutput = inflate(response.slice(10));
  } catch(error) {
    sendMessage("Error", "The server's response could not be decoded.");
    return;
  }
  try {response = byteStringToText(rawOutput);}catch(error) {response = rawOutput;}
  if (response.length < 32) {sendMessage("Error", "Could not establish or maintain a connection with the server.");}
  let output = response.replace(new RegExp(response.slice(0,16).replace(/\W/g,t=>"\\"+t),"g"),"").split("\n").slice(0,-5).join("\n");
  log(output);
  return output;
  //return new Promise(function(resolve, reject) {
  //  resolve(response);
  //});
}

// - TIO CODE FOLLOWS
function deflate(byteString) {return pako.deflateRaw(byteStringToByteArray(byteString), {"level": 9});}
function inflate(byteString) {return byteArrayToByteString(pako.inflateRaw(byteString));}
function textToByteString(string) {return unescape(encodeURIComponent(string));}
function byteStringToText(byteString) {return decodeURIComponent(escape(byteString));}
function byteStringToByteArray(byteString) {
  var byteArray = new Uint8Array(byteString.length);
  for(var index = 0; index < byteString.length; index++)byteArray[index] = byteString.charCodeAt(index);
  byteArray.head = 0;
  return byteArray;
}
function byteArrayToByteString(byteArray) {
  var retval = "";
  iterate(byteArray, function(byte) { retval += String.fromCharCode(byte); });
  return retval;
}
function sendMessage(title, text) {console.log(title + ":" + text);}
function codeToByteString(code, params) {
  var value = textToByteString(code);  
  return params.concat([value.length, value, "R"]).join("\0");
}
function iterate(iterable, monad) {if (!iterable)return;for (var i = 0; i < iterable.length; i++)monad(iterable[i]);}
