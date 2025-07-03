// Animated background: Gradients are animated via CSS keyframes
// You can optionally add extra interactive JS here (e.g., scroll effects, modal for gallery, etc.)

// Example: Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Example: Gallery modal (lightbox)
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', function () {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.position = 'fixed';
    modal.style.top = 0;
    modal.style.left = 0;
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(10,10,24,0.92)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = 9999;

    const imgClone = document.createElement('img');
    imgClone.src = this.src;
    imgClone.style.maxWidth = '90vw';
    imgClone.style.maxHeight = '90vh';
    imgClone.style.borderRadius = '16px';
    modal.appendChild(imgClone);

    modal.addEventListener('click', () => document.body.removeChild(modal));
    document.body.appendChild(modal);
  });
});