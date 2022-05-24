var data = [];
$("#formulario_contacto").submit(function(event) {
    event.preventDefault();
    data.push($(this).find('input[name="nombre"]').val());
    data.push($(this).find('input[name="apellidos"]').val());
    data.push($(this).find('input[name="edad"]').val());
    data.push($(this).find('input[name="email"]').val());
    data.push($(this).find('input[name="telefono"]').val());
    data.push($(this).find('input[name="fecha"]').val());
    data.push($(this).find('input[name="hora"]').val());
    data.push($(this).find('input[name="contrasena"]').val());
    data.push($(this).find('select[name="titulacion"]').val());
    data.push($(this).find('input[name="modulos"]').val());
    data.push($(this).find('input[name="coche"]').val());
    data.push($(this).find('input[name="moto"]').val());
    data.push($(this).find('textarea[name="info"]').val());
    alert("Formulario enviado con éxito.");
    document.getElementById("validacion_formulario").innerHTML = "Nombre: "+data[0]+"<br/>"+
    "Apellidos: "+data[1]+"<br/>"+
    "Edad: "+data[2]+"<br/>"+
    "Email: "+data[3]+"<br/>"+
    "Teléfono: "+data[4]+"<br/>"+
    "Fecha de nacimiento: "+data[5]+"<br/>"+
    "Hora: "+data[6]+"<br/>"+
    "Contraseña: "+data[7]+"<br/>"+
    "Titulación: "+data[8]+"<br/>"+
    "Módulo preferido: "+data[9]+"<br/>"+
    "Coche: "+data[10]+"<br/>"+
    "Moto: "+data[11]+"<br/>"+
    "Información adicional: "+data[12];
});