const svg = document.getElementById('compass');
  const needle = document.getElementById('needle');

  document.addEventListener('mousemove', (e) => {
    const rect = svg.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;

    // ângulo em graus; +90 porque a agulha "aponta" para cima (N) por padrão
    const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;

    needle.style.transform = `rotate(${angle}deg)`;
  });