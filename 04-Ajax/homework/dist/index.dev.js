"use strict";

var lista = $("#lista"); //Get all

$("#boton").click(function () {
  lista.empty();
  $.get("http://localhost:5000/amigos", function (data, status) {
    if (status === 'success') {
      data.forEach(function (element) {
        return lista.append('<li>' + element.name + '</li>');
      });
    }
  });
}); //Get by id

$("#search").click(function () {
  var id = $("#input").val();
  $.get("http://localhost:5000/amigos/".concat(id), function (data, status) {
    if (status === 'success') {
      $("#amigo").text(data.name);
    }
  });
});