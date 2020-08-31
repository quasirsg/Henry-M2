var lista = $("#lista");

$("#boton").click(function () {
    $.get("http://localhost:5000/amigos", function(data, status){
    if(status === 'success'){
        data.forEach(element => lista.append(
            '<li>'+element.name+'</li>'
        ));
    }
  });
});

