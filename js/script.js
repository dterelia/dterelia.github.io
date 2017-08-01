var foo = document.querySelector('.portrait');
foo.addEventListener('click', bar);
function bar(e) {
  e.preventDefault();
  foo.classList.toggle('portrait--large');
  foo.classList.toggle('portrait--sarge');
}