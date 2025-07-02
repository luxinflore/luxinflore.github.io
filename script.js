document.querySelectorAll('.sparkle-cat').forEach(link => {
  link.addEventListener('mouseenter', () => {
    const cat = document.createElement('div');
    cat.classList.add('cat-jump');

    // Position the cat relative to the hovered link
    const rect = link.getBoundingClientRect();
    cat.style.top = `${rect.top + window.scrollY - 40}px`; // 40px above
    cat.style.left = `${rect.left + window.scrollX}px`;

    document.body.appendChild(cat);

    cat.addEventListener('animationend', () => {
      cat.remove();
    });
  });
});

