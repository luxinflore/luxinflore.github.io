document.querySelectorAll('.sparkle-cat').forEach(link => {
  link.addEventListener('mouseenter', () => {
    const img = document.createElement('img');
    img.src = 'https://cdnb.artstation.com/p/assets/images/images/046/491/445/original/chat-poteley-animation.gif?1645234590'
    img.className = 'cat-jump-img';

    const rect = link.getBoundingClientRect();
    img.style.top = `${rect.top + window.scrollY - 60}px`; // 60px above the link
    img.style.left = `${rect.left + window.scrollX}px`;

    document.body.appendChild(img);

    img.addEventListener('animationend', () => {
      img.remove();
    });
  });
});


