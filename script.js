document.addEventListener("DOMContentLoaded", () => {
const aliens = ["👽", "👾", "🛸", "🐄", "🦑", "💦", "🍆", "🍑", "🌶", "️🚬", "❄", "️🎃", "💊", "💨", "🤠", "🤖"];
const listItems = document.querySelectorAll("ul li");

listItems.forEach((li) => {
  const randomEmoji = aliens[Math.floor(Math.random() * aliens.length)];
  li.style.setProperty('--before-content', `"${randomEmoji}"`);
});

  // --- Shooting Stars ---
  const starsContainer = document.querySelector('.shooting-stars');

  function createShootingStar(delay = 0) {
    const star = document.createElement('div');
    star.classList.add('shooting-star');
    star.style.cssText = `
      top: ${Math.random() * 80}vh;
      left: ${Math.random() * 100}vw;
      animation-duration: ${(Math.random() * 1 + 0.8)}s;
      animation-delay: ${delay}s;
    `;
    starsContainer.appendChild(star);

    star.addEventListener('animationend', () => {
      star.remove();
      // Delay creation to prevent stacking
      setTimeout(() => createShootingStar(Math.random() * 5), 100);
    });
  }

  for (let i = 0; i < 5; i++) {  // Fewer stars initially
    createShootingStar(i * 0.8);
  }


  // --- Alien Image Movement ---
const alien = document.getElementById('alien');
const shouldShowAlien = Math.random() < 0.3;

if (shouldShowAlien && alien) {
  const rand = Math.random();
  let selectedImage = "";

  if (rand < 0.8) {
    selectedImage = "alien.png";
  } else if (rand < 0.9) {
    selectedImage = "beer.png";
  } else {
    selectedImage = "cig.png";
  }

  alien.setAttribute('src', selectedImage);

  setTimeout(() => {
    alien.style.display = 'block';
    alien.style.position = 'fixed'; // Use fixed to keep it in viewport
    alien.style.willChange = 'transform, top, left'; // Hint for performance
    alien.style.width = '100px'; // Optional: set known width/height
    alien.style.height = 'auto';

    moveAlien();
  }, 5000);

  function moveAlien() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const alienWidth = alien.offsetWidth;
    const alienHeight = alien.offsetHeight;

    const newX = Math.random() * (screenWidth - alienWidth);
    const newY = Math.random() * (screenHeight - alienHeight);
    const scale = 0.5 + Math.random() * 1.5;

    alien.style.transition = 'transform 2s ease, left 2s ease, top 2s ease';
    alien.style.left = `${newX}px`;
    alien.style.top = `${newY}px`;
    alien.style.transform = `scale(${scale})`;

    setTimeout(moveAlien, 2000);
  }
}

});
