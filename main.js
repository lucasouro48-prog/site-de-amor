
// Responsável pelo menu, animações por scroll e modal de galeria
(function(){
  // Menu hambúrguer
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if(hamburger){
    hamburger.addEventListener('click', () => { nav.classList.toggle('open'); hamburger.classList.toggle('open'); });
  }

  // IntersectionObserver para animações
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in-view'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.animate-fade-up, .animate-fade-right, .animate-fade-left, .animate-zoom-in').forEach(el => observer.observe(el));

  // Modal de galeria
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  document.querySelectorAll('.grid-gallery figure').forEach(fig => {
    fig.addEventListener('click', () => openModal(fig.querySelector('img')));
    fig.addEventListener('keypress', e => { if(e.key === 'Enter') openModal(fig.querySelector('img')); });
  });
  function openModal(img){ if(!modal) return; modalImg.src = img.src; modal.classList.add('open'); }
  if(modal) modal.addEventListener('click', () => { modal.classList.remove('open'); modalImg.src = ''; });
})();

