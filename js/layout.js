// Encabezado y pie compartidos en todas las páginas
(function () {
  var pages = [["Index.html","Inicio"],["Servicio.html","Servicios"],["Medicos.html","Médicos"],["Citas.html","Citas"],["Contacto.html","Contacto"],["Portal.html","Portal del personal"]];
  var here = location.pathname.split("/").pop() || "Index.html";
  var nav = pages.map(function (p) {
    return '<a href="' + p[0] + '"' + (p[0] === here ? ' class="act"' : '') + '>' + p[1] + '</a>';
  }).join("");
  document.getElementById("site-header").innerHTML =
    '<div class="wrap"><div class="top"><a class="logo" href="index.html">Clínica Integral Horizonte</a><nav aria-label="Principal">' + nav + '</nav></div></div>';
  document.getElementById("site-footer").innerHTML =
    '<div class="wrap"><footer><div class="fgrid"><div><b>Clínica Integral Horizonte, S.C.</b><br>Lunes a sábado, 7:00 a 21:00<br>Tel. 81 0000 0000 (ficticio)</div><div>Organización y datos ficticios para un proyecto académico de ciberseguridad.<br>© 2026</div></div></footer></div>';
})();