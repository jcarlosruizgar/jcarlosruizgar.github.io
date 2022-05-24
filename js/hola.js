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
var data = [];
$("#formulario_login").submit(function(event) {
    event.preventDefault();
    data.push($(this).find('input[name="nombre_login"]').val());
    document.getElementById("b_usr").innerHTML = mensaje+data[0];
});