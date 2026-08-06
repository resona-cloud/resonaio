// Animate bars when in view
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      e.target.querySelectorAll('.bar-fill').forEach((b,i) => {
        setTimeout(() => { b.style.width = b.dataset.w; }, i * 150);
      });
      barObs.unobserve(e.target);
    }
  });
}, { threshold:0.3 });
const barRows = document.getElementById('barRows');
if(barRows) barObs.observe(barRows);
