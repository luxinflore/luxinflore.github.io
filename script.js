document.querySelectorAll('.sparkle-cat').forEach(link => {
  link.addEventListener('mouseenter', () => {
    const cat = document.createElement('img');
    cat.src = 'https://64.media.tumblr.com/e642b66f8548fa1485621bd82d3eacc9/df8c8427627025f7-72/s640x960/af7dc108c6fd722e684f767aa7ad6b9f72f9d9c9.gif';
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


