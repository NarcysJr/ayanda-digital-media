import './components/meuMenu.js';
import './components/meuFooter.js';
import './components/formContacto.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

// inicialização (esperar DOM e load de recursos)
window.addEventListener('load', () => {
  AOS.init({
    duration: 900,
    once: true,
  });

  // garante recalculo após todas as imagens carregarem
  AOS.refresh();
});

window.addEventListener('scroll', () => {
  const toTop = document.getElementById('toTop');
  if (window.scrollY > 300) toTop.classList.remove('hidden');
  else toTop.classList.add('hidden');
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', () => {
    setTimeout(() => {
      AOS.refresh();
    }, 800);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const toTop = document.getElementById('toTop');

  if (toTop) {
    toTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
