document.addEventListener('DOMContentLoaded', () => {
  const chiikawa = document.getElementById('chiikawa');

  if (!chiikawa) return;

  chiikawa.addEventListener('click', () => {
    chiikawa.classList.remove('shake');
    void chiikawa.offsetWidth;
    chiikawa.classList.add('shake');
  });

  chiikawa.addEventListener('animationend', () => {
    chiikawa.classList.remove('shake');
  });
});