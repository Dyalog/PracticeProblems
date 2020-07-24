 Tio←{
   ⍝ ⍺⍺ is language from https://github.com/TryItOnline/tryitonline/tree/master/wrappers
   ⍝ ⍵ is Code
     ⍺←'' ⍝ Input
     (z n)←⎕UCS 0 10

     Norm←1↓∘∊n,¨⊆
     File←{'F.',⍺,'.tio',z,(⍕≢Ucs ⍵),z,⍵}∘Norm
     Ucs←{11::⎕UCS ⍵ ⋄ 'UTF-8'⎕UCS ⍵}
     Var←{'V',⍺,z,(⍕≢⍵),z,∊⍵,¨z}∘⊆
     Zip←256|⊣219⌶¯128+256|128+⊢
     Cut←¯1↓⊣↓¨⊢⊂⍨↑⍷⊢

     vars←'lang' 'args'Var¨⍺⍺(0⍴⊂'')
     files←'input' 'code'File¨⍺ ⍵

     cmd←⎕NEW #.HttpCommand'POST'
     cmd.URL←'https://tio.run/cgi-bin/run'
     cmd.Params←⎕UCS 2↓¯4↓⊃⌽2 Zip Ucs∊vars files'R'
     cmd.Headers←'Content-Type' 'application/octet-stream'

     data←cmd.Run.Data
     0=≢data:'TIMEOUT'⎕SIGNAL 106
     resp←Ucs ¯3 Zip ⎕UCS data
     (stdout stderr)←2↑16 Cut resp
     exit←⍎⎕D∩⍨¯3↑stderr

     0=exit:¯1↓''⎕R''⍠'EOL' 'CR'⍠'NEOL' 1⊢stdout
     msg←'(\n.+?){5}$'⎕R''⍠'Mode' 'D'⊢stderr
     msg ⎕SIGNAL exit
 }
