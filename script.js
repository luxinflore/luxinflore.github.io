document.querySelectorAll('.sparkle-cat').forEach(link => {
  link.addEventListener('mouseenter', () => {
    const cat = document.createElement('img');
    cat.src = 'https://s1.ezgif.com/tmp/ezgif-120326da7e518e.gif';
    cat.classList.add('cat-jump');

    // Position relative to hovered element
    const rect = link.getBoundingClientRect();
    cat.style.top = `${rect.top + window.scrollY - 40}px`;
    cat.style.left = `${rect.left + window.scrollX}px`;

    document.body.appendChild(cat);

    setTimeout(() => {
      cat.remove();
    }, 1000); // match animation duration
  });
});


