document.querySelectorAll('.sparkle-cat, .cat-hover-link').forEach(link => {
  link.addEventListener('mouseenter', () => {
    const isNav = link.classList.contains('cat-hover-link');

    const cat = document.createElement('img');
    cat.src = 'https://s1.ezgif.com/tmp/ezgif-120326da7e518e.gif';
    cat.classList.add(isNav ? 'cat-run' : 'cat-jump');

    // Position near the link
    const rect = link.getBoundingClientRect();
    cat.style.top = `${rect.top + window.scrollY - (isNav ? 20 : 40)}px`;
    cat.style.left = `${rect.left + window.scrollX}px`;

    document.body.appendChild(cat);

    // If nav, spawn sparkles along path
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
  });
});


