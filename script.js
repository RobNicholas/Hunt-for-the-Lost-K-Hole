document.addEventListener("DOMContentLoaded", () => {
const aliens = ["👽", "👾", "🛸", "🐄", "🦑", "💦", "🍆", "🍑", "🌶", "️🚬", "❄", "️🎃", "💊", "💨", "🤠", "🤖"];
  const listItems = document.querySelectorAll("ul li");
  const emojiTrail = new Array(listItems.length).fill("");

  // Start with a random emoji on the first <li>
  emojiTrail[0] = aliens[Math.floor(Math.random() * aliens.length)];

  function updateEmojis() {
    // Shift all emojis downward
    for (let i = listItems.length - 1; i > 0; i--) {
      emojiTrail[i] = emojiTrail[i - 1];
    }

    // Insert a new random emoji at the top
    emojiTrail[0] = aliens[Math.floor(Math.random() * aliens.length)];

    // Apply the emoji to each list item's CSS
    listItems.forEach((li, index) => {
      li.style.setProperty('--before-content', `"${emojiTrail[index]}"`);
    });
  }

  updateEmojis(); // initial call
  setInterval(updateEmojis, 600); // update every 500ms

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
const shouldShowAlien = Math.random() < 0.1;

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

  // Show the alien for 10-15 seconds
  setTimeout(() => {
    alien.style.display = 'block';
    alien.style.position = 'fixed'; 
    alien.style.willChange = 'transform, top, left'; 
    alien.style.width = '100px'; 
    alien.style.height = 'auto';

    moveAlien();

    // Hide the alien after 10-15 seconds
    setTimeout(() => {
      alien.style.display = 'none';
    }, Math.random() * 5000 + 10000); 

  }, 5000); // Initial delay before appearing

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

  // After 30 seconds, repeat the process
  setTimeout(() => {
    alien.style.display = 'none';
  }, 30000); 
}


});
