

// ── TYPEWRITER ──
const words = [
  "An Electrical Engineer.",
  "A Software Engineer.",
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


//  ── IMAGE  ──


const modal = document.getElementById("cert-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".cert-image").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

modal.onclick = (e) => {
  if (e.target !== modalImg) {
    modal.style.display = "none";
  }
};

const form = document.querySelector(".contact-form");
const status = document.getElementById("form-status");
const button = form.querySelector(".form-submit");
const text = button.querySelector(".btn-text");
const loader = button.querySelector(".btn-loader");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  // Show loader
  text.style.display = "none";
  loader.style.display = "inline-block";

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.textContent = "Message sent successfully!";
      status.classList.add("show");
      form.reset();
    } else {
      status.textContent = "Something went wrong. Try again.";
      status.classList.add("show");
    }

  } catch (error) {
    status.textContent = "Network error. Please try again.";
    status.classList.add("show");
  }

  // Reset button
  loader.style.display = "none";
  text.style.display = "inline";
});