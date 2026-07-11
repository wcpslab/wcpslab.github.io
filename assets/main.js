(function () {
  var saved = localStorage.getItem("theme");
  var dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.setAttribute("data-theme", saved || (dark ? "dark" : "light"));

  document.addEventListener("DOMContentLoaded", function () {
    var hdr = document.getElementById("hdr");
    var hasHero = document.querySelector(".hero, .banner");

    function onScroll() {
      if (!hdr) return;
      if (!hasHero || window.scrollY > 60) hdr.classList.add("solid");
      else hdr.classList.remove("solid");
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var t = document.getElementById("theme-toggle");
    if (t) t.addEventListener("click", function () {
      var n = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", n);
      localStorage.setItem("theme", n);
    });

    var m = document.getElementById("menu-toggle"), nav = document.getElementById("nav");
    if (m && nav) m.addEventListener("click", function () {
      nav.classList.toggle("open");
      if (nav.classList.contains("open") && hdr) hdr.classList.add("solid");
      else onScroll();
    });

    var s = document.getElementById("pub-search");
    if (s) {
      var items = [].slice.call(document.querySelectorAll(".pubs li"));
      var groups = [].slice.call(document.querySelectorAll(".pub-group"));
      var empty = document.getElementById("no-results");
      s.addEventListener("input", function () {
        var q = s.value.trim().toLowerCase();
        items.forEach(function (li) {
          li.hidden = q && li.textContent.toLowerCase().indexOf(q) === -1;
        });
        var total = 0;
        groups.forEach(function (g) {
          var v = [].slice.call(g.querySelectorAll(".pubs li")).filter(function (li) { return !li.hidden; }).length;
          total += v;
          g.hidden = v === 0;
        });
        if (empty) empty.style.display = total ? "none" : "block";
      });
    }
  });
})();

/* ---- auto counters ---------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('[data-count="ol"]').forEach(function (el) {
    var g = el.closest(".pub-group") || el.closest("section");
    el.textContent = g ? g.querySelectorAll("ol > li, ul.pubs > li").length : 0;
  });
  var all = document.querySelector('[data-count="all-pubs"]');
  if (all) all.textContent = document.querySelectorAll(".pubs > li").length;

  var gr = document.querySelector('[data-count="all-grants"]');
  if (gr) gr.textContent = document.querySelectorAll(".grants > li").length;

  document.querySelectorAll('[data-count="team"]').forEach(function (el) {
    var h = el.closest(".team-h");
    var people = h && h.nextElementSibling;
    el.textContent = people ? people.querySelectorAll(".person").length : 0;
  });

  var al = document.querySelector('[data-count="alumni"]');
  if (al) al.textContent = document.querySelectorAll(".alumni > li").length;
});
