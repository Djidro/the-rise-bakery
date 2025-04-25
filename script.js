// script.js

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-title");
  const text = hero.textContent.trim().split("");
  hero.innerHTML = "";

  text.forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.classList.add("letter");
    // Stagger animation start times
    span.style.animationDelay = `${i * 0.1}s`;
    hero.appendChild(span);
  });
});
