function chooseLove(isLove) {
  const result = document.getElementById('result');
  const buttons = document.getElementById('buttons');
  const sparkleContainer = document.getElementById('sparkleContainer');
  const linkYes = document.getElementById('linkYes');
  const linkNo = document.getElementById('linkNo');
  const question = document.getElementById('question');

  buttons.style.display = 'none';
  question.style.display = 'none';

  if (isLove) {
    result.innerHTML = '<div class="heart">❤️</div>';
    linkYes.style.display = 'block';
    generateSparkles();
  } else {
    result.innerHTML = '<div class="heart">💔</div>';
    linkNo.style.display = 'block';
    sparkleContainer.innerHTML = '';
  }
}

function generateSparkles() {
  const sparkleContainer = document.getElementById('sparkleContainer');
  sparkleContainer.innerHTML = ''; // Temizle
  for (let i = 0; i < 50; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.animationDuration = (1 + Math.random() * 2) + 's';
    sparkleContainer.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 3000);
  }
}
