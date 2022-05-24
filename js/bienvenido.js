var usr = window.prompt("Usuario");
        var hoy = new Date();
        var hora = hoy.getHours();
        var mensaje;
        if(hora>=6&hora<12){
            mensaje = "Buenos días, ";
        }
        else if(hora>=12&hora<21){
            mensaje = "Buenas tardes, ";
        }
        else{
            mensaje = "Buenas noches, ";
        }
        document.getElementById("b_usr").innerHTML =mensaje+usr;