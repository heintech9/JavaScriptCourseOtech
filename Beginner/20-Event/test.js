window.addEventListener('focus', () => {
    document.querySelectorAll('p').forEach((p) => {
      p.style.color = 'blue';
    });
  });
  
  window.addEventListener('blur', () => {
    document.querySelectorAll('p').forEach((p) => {
      p.style.color = 'black';
    });
  });
  