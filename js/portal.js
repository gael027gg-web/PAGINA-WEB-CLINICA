// Portal del personal: inicio de sesión simulado en el navegador (datos ficticios)
(function () {
  var $ = function (i) { return document.getElementById(i); };
  var USERS = { recepcion: { pass: "Recep2026!", rol: "Recepción" }, doctora: { pass: "Medico2026!", rol: "Médico" } };
  var PAC = [
    { n: "Paciente Uno", h: "09:00", s: "Medicina general", dx: "Hipertensión" },
    { n: "Paciente Dos", h: "10:30", s: "Pediatría", dx: "Control niño sano" },
    { n: "Paciente Tres", h: "12:00", s: "Laboratorio", dx: "Alergia a penicilina" }
  ];
  function abrir(u) {
    var r = USERS[u].rol, med = r === "Médico";
    $("loginBox").classList.add("hidden"); $("panel").classList.remove("hidden");
    $("quien").textContent = "Sesión de " + u + " (" + r + ")";
    $("thead").innerHTML = "<th>Paciente</th><th>Hora</th><th>Servicio</th>" + (med ? "<th>Nota clínica</th>" : "");
    $("tbody").innerHTML = PAC.map(function (p) {
      return "<tr><td>" + p.n + "</td><td>" + p.h + "</td><td>" + p.s + "</td>" + (med ? "<td>" + p.dx + "</td>" : "") + "</tr>";
    }).join("");
    $("info").textContent = med ? "Perfil médico: agenda y notas clínicas." : "Perfil de recepción: solo agenda.";
    sessionStorage.setItem("horizonte_user", u);
  }
  $("loginForm").onsubmit = function (e) {
    e.preventDefault();
    var u = $("u").value.trim().toLowerCase(), p = $("p").value, m = $("loginMsg");
    if (USERS[u] && USERS[u].pass === p) { m.classList.add("hidden"); abrir(u); }
    else { m.textContent = "Usuario o contraseña incorrectos."; m.classList.remove("hidden"); }
  };
  $("logout").onclick = function () {
    sessionStorage.removeItem("horizonte_user");
    $("panel").classList.add("hidden"); $("loginBox").classList.remove("hidden"); $("loginForm").reset();
  };
  var s = sessionStorage.getItem("horizonte_user");
  if (s && USERS[s]) abrir(s);
})();