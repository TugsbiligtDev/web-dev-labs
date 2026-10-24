// ☰ товч: жижиг дэлгэц дээр цэсийг гулсуулж нээнэ, том дэлгэц дээр цэсийг нууна/харуулна
document.getElementById('menuToggle').addEventListener('click', function () {
  if (window.innerWidth < 992) {
    bootstrap.Offcanvas.getOrCreateInstance('#sidebar').toggle();
  } else {
    document.body.classList.toggle('sidebar-collapsed');
  }
});

// Projects Grid: All / Active / Completed табаар картуудыг шүүнэ
document.querySelectorAll('[data-filter]').forEach(function (tab) {
  tab.addEventListener('click', function () {
    document.querySelectorAll('[data-filter]').forEach(function (t) {
      t.classList.remove('active');
    });
    tab.classList.add('active');
    document.querySelectorAll('[data-status]').forEach(function (card) {
      var show = tab.dataset.filter === 'all' || card.dataset.status === tab.dataset.filter;
      card.classList.toggle('d-none', !show);
    });
  });
});
