

// ── TYPEWRITER ──
const words = [
  "An Electrical Engineer.",
  "A Software Developer.",
  "An AI Specialist.",
  "A Founder & Visionary.",
  "A Problem Solver."
];
let wi = 0, ci = 0, deleting = false;
const tw = document.getElementById('typewriter');

function type() {
  const word = words[wi];
  if (!deleting) {
    ci++;
    tw.innerHTML = word.slice(0, ci) + '<span class="cursor">|</span>';
    if (ci === word.length) { deleting = true; setTimeout(type, 2000); return; }
    setTimeout(type, 80);
  } else {
    ci--;
    tw.innerHTML = word.slice(0, ci) + '<span class="cursor">|</span>';
    if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; setTimeout(type, 300); return; }
    setTimeout(type, 45);
  }
}
setTimeout(type, 1000);

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


