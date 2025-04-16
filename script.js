document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('navLinks');
  
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
      toggle.innerHTML = nav.classList.contains('show') ? '&times;' : '&#9776;';
    });
  });
  