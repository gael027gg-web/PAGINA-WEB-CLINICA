// Citas: se guardan en localStorage del navegador (sin servidor)
(function () {
  var KEY = "horizonte_citas", $ = function (i) { return document.getElementById(i); };
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } }
  function save(a) { try { localStorage.setItem(KEY, JSON.stringify(a)); } catch (e) {} }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]; }); }
  var f = $("citaForm");
  $("cf").min = new Date().toISOString().slice(0, 10);
  function render() {
    var a = load();
    $("lista").innerHTML = a.length ? a.map(function (c, i) {
      return "<tr><td>" + esc(c.n) + "</td><td>" + esc(c.s) + "</td><td>" + esc(c.f) + " " + esc(c.h) + "</td><td><button class='link' data-i='" + i + "'>Cancelar</button></td></tr>";
    }).join("") : "<tr><td colspan='4'>Aún no tienes citas solicitadas.</td></tr>";
  }
  f.onsubmit = function (e) {
    e.preventDefault();
    var m = $("msg");
    if (new Date($("cf").value + "T00:00").getDay() === 0) {
      m.className = "msg err"; m.textContent = "No hay atención los domingos. Elige de lunes a sábado."; return;
    }
    var a = load();
    a.push({ n: $("cn").value.trim(), s: $("cs").value, f: $("cf").value, h: $("ch").value });
    save(a);
    m.className = "msg good"; m.textContent = "Solicitud registrada. Te confirmaremos por teléfono el mismo día.";
    f.reset(); render();
  };
  $("lista").onclick = function (e) {
    var i = e.target.getAttribute("data-i"); if (i === null) return;
    var a = load(); a.splice(+i, 1); save(a); render();
  };
  render();
})();