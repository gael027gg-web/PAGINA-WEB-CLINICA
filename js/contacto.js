document.getElementById("contactoForm").onsubmit = function (e) {
  e.preventDefault();
  var m = document.getElementById("msg");
  m.className = "msg good";
  m.textContent = "Mensaje enviado (demostración). Te responderemos en un día hábil.";
  e.target.reset();
};