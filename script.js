document.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    const cat = document.createElement('div');
    cat.classList.add('cat-runner');
    document.body.appendChild(cat);

    cat.addEventListener('animationend', () => {
      cat.remove();
    });
  });
});

