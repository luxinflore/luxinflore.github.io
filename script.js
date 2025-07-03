document.querySelectorAll('.sparkle-cat, .cat-hover-link').forEach(link => {
  const showCat = () => {
    const isNav = link.classList.contains('cat-hover-link');

    const cat = document.createElement('img');
    cat.src = '/assets/images/catGIF.gif';
    cat.classList.add(isNav ? 'cat-run' : 'cat-jump');

    const rect = link.getBoundingClientRect();
    cat.style.top = `${rect.top + window.scrollY - (isNav ? 20 : 40)}px`;
    cat.style.left = `${rect.left + window.scrollX}px`;

    document.body.appendChild(cat);

    if (isNav) {
      const sparkleInterval = setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.top = `${cat.offsetTop + 20}px`;
        sparkle.style.left = `${cat.offsetLeft + 20}px`;
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 800);
      }, 80);

      cat.addEventListener('animationend', () => {
        clearInterval(sparkleInterval);
        cat.remove();
      });
    } else {
      setTimeout(() => cat.remove(), 1000);
    }
  };

  // Desktop hover
  link.addEventListener('mouseenter', showCat);

  // Mobile tap/click support
  link.addEventListener('click', event => {
    // Prevent link navigation just for visual effect (optional)
    if (link.classList.contains('cat-hover-link')) event.preventDefault();
    showCat();
  });
});



