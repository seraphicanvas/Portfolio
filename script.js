// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Project image modal (lightbox effect)
document.querySelectorAll('.project-card img').forEach(img => {
  img.addEventListener('click', function () {
    const modal = document.createElement('div');
    modal.className = 'modal';
    Object.assign(modal.style, {
      position: 'fixed',
      top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(23,22,40,0.97)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 9999,
    });

    const imgClone = document.createElement('img');
    imgClone.src = this.src;
    Object.assign(imgClone.style, {
      maxWidth: '90vw',
      maxHeight: '90vh',
      borderRadius: '18px',
      boxShadow: '0 6px 40px 0 rgba(162,89,255,0.19)'
    });
    modal.appendChild(imgClone);

    modal.addEventListener('click', () => document.body.removeChild(modal));
    document.body.appendChild(modal);
  });
});