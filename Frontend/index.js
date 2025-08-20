// Example JS for button clicks
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert(`You clicked: ${btn.textContent}`);
  });
});
