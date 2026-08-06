const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 20));
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold:0.08, rootMargin:'0px 0px -32px 0px' });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
