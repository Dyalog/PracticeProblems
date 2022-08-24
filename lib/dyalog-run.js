
$=s=>document.querySelector(s);

function run(expr, id)
{
	let socket = new WebSocket("wss://dyalog.run/api/v0/ws/execute");
	socket.onopen = () => socket.send(MessagePack.encode({
    language: "dyalog_apl",
    code: expr,
    timeout: 15,
	}));

	socket.onmessage = async event => {
		let response = await MessagePack.decodeAsync(event.data.stream());
		let res = new TextDecoder().decode(response.stdout)

    $("#"+id+"_Output").innerHTML = res.replace(/`[^`]+`/g,x=>'<code>'+x.split('`')[1]+'</code>').replace(/^(¯|[0-9])+\s+/,"");
	}
}

async function submitSolution(id) {  
  let code = $('#'+id+"_Input").value;
  if (code.length) {
    let problem = {"P0": testCases[id]};
    var expr = tns + "\n" + importTestNS + "\n" + "p← ⎕JSON'" + JSON.stringify(problem).split("'").join("''") + "'\n" + "⎕←(p Test.Run)1'" + code.split("'").join("''") +  "'";

    run(expr, id);
  }
}
