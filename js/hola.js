//hacer el login
var data = [];
$("#formulario_contacto").submit(function(event) {
    event.preventDefault();
    data.push($(this).find('input[name="nombre"]').val());
    data.push($(this).find('input[name="apellidos"]').val());
    //alert("Formulario enviado con éxito.");
    document.getElementById("validacion_formulario").innerHTML = data[1];
});