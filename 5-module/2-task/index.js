function toggleText() {
  const divText = document.querySelector('.toggle-text-button');
  text = document.querySelector('#text');
  divText.addEventListener('click', () => {
    if (text.hidden) {
      text.hidden = false;
    } else {
      text.hidden = true;
    }
  });
}
