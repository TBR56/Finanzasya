
document.getElementById('menuBtn').addEventListener('click', () => {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('hidden');
});
document.getElementById('year').textContent = new Date().getFullYear();
