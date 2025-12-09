// Funções JS para controlar o menu hambúrguer sem depender do JS do Bootstrap

const toggler = document.querySelector('.navbar-toggler');
const collapse = document.getElementById('navbarSupportedContent');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

if (toggler && collapse) {
  // Alterna menu ao clicar no botão
  toggler.addEventListener('click', (e) => {
    const isOpen = collapse.classList.toggle('show');
    toggler.setAttribute('aria-expanded', String(isOpen));
    toggler.classList.toggle('open'); // classe para animação (CSS)
  });

  // Fecha o menu ao clicar em um link (útil em mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (collapse.classList.contains('show')) {
        collapse.classList.remove('show');
        toggler.setAttribute('aria-expanded', 'false');
        toggler.classList.remove('open');
      }
    });
  });

  // Fecha ao clicar fora do menu
  document.addEventListener('click', (e) => {
    if (!collapse.contains(e.target) && !toggler.contains(e.target) && collapse.classList.contains('show')) {
      collapse.classList.remove('show');
      toggler.setAttribute('aria-expanded', 'false');
      toggler.classList.remove('open');
    }
  });

  // Fecha com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && collapse.classList.contains('show')) {
      collapse.classList.remove('show');
      toggler.setAttribute('aria-expanded', 'false');
      toggler.classList.remove('open');
    }
  });
}