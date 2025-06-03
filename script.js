document.addEventListener("DOMContentLoaded", () => {
  const aliens = ["👽", "👾", "🛸", "🐄", "🦑", "💦", "🍆", "🍑", "🌶", "️🚬", "❄", "️🎃", "💊", "💨", "🤠", "🤖"];
  const listItems = document.querySelectorAll("ul li");
  const emojiTrail = new Array(listItems.length).fill("");

  emojiTrail[0] = aliens[Math.floor(Math.random() * aliens.length)];

  function updateEmojis() {
    const newEmoji = aliens[Math.floor(Math.random() * aliens.length)];
    for (let i = emojiTrail.length - 1; i > 0; i--) {
      emojiTrail[i] = emojiTrail[i - 1];
    }
    emojiTrail[0] = newEmoji;

    listItems.forEach((li, index) => {
      const currentEmoji = `"${emojiTrail[index]}"`;
      // Only update if changed
      if (li.style.getPropertyValue('--before-content') !== currentEmoji) {
        li.style.setProperty('--before-content', currentEmoji);
      }
    });
  }

  updateEmojis();

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
const shouldShowAlien = Math.random() < 0.5;

if (shouldShowAlien && alien) {

  const rand = Math.random(); // a number between 0 and 1
  let selectedImage = "";

  if (rand < 0.8) {
    selectedImage = "alien.png"; // 80% chance
  } else if (rand < 0.9) {
    selectedImage = "beer.png"; // 10% chance
  } else {
    selectedImage = "cig.png"; // 10% chance
  }

  alien.setAttribute('src', selectedImage);

  setTimeout(() => {
    alien.style.display = 'block';
    alien.style.position = 'absolute'; // Ensure it's positioned absolutely from the start
    moveAlien();
  }, 5000);

  function moveAlien() {
    const screenWidth = window.innerWidth;
    const pageHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );

    const newX = Math.random() * (screenWidth - alien.width);
    const newY = Math.random() * (pageHeight - alien.height);
    const scale = 0.5 + Math.random() * 1.5; // scale from 0.5x (far) to 2x (close)

    alien.style.transition = 'all 2s ease';
    alien.style.left = `${newX}px`;
    alien.style.top = `${newY}px`;
    alien.style.transform = `scale(${scale})`;

    setTimeout(moveAlien, 2000);
  }
}

});
