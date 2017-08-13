//prototype code, rewrite ASAP

//portrait resizer
var foo = document.querySelector('.portrait');
foo.addEventListener('click', bar);
function bar(e) {
  e.preventDefault();
  foo.classList.toggle('portrait--large');
  foo.classList.toggle('portrait--sarge');
}

//skill-leveler
var skillBox = document.querySelector('.skills__logo-container');
skillBox.addEventListener('mouseover', skillHandler);
skillBox.addEventListener('mouseout', skillHandler);
var skillTitle = document.querySelector('.skills-level__title');
var skillBar = document.querySelector('.skills-level__bar');
var skillLevel = document.querySelector('.skills-level__filler');
var skillDesc = document.querySelector('.skills-level__description');
// skillBox.addEventListener('click', skillHandler);
function skillHandler(e) {
  e.preventDefault();

  if (event.type == 'mouseover') {

    showSkill(event.target.dataset);
  } else if (event.type == 'mouseout') {
    hideSkill();
  }

  function showSkill(data) {
    if (!data.skilltitle) return null;

    console.log(data);
    console.log(data.skilltitle);
    console.log(data.skilllevel + '%');
    console.log(data.skilldesc);

    skillTitle.innerHTML = data.skilltitle;
    skillBar.style.opacity=1;
    skillDesc.style.opacity=1;
    skillLevel.style.width = data.skilllevel + '%';
    skillDesc.innerHTML = data.skilldesc;
    // var skillLevel = document.querySelector('.skills-level__filler');
  }
  function hideSkill() {
    skillTitle.innerHTML = 'Select skill for more info'
    // skillLevel.style.width = data.skilllevel + '%';
    skillLevel.style.width = 0;
    skillBar.style.opacity=0;
    skillDesc.style.opacity=0;
  }
}

// function handler(event) {

//   function str(el) {
//     if (!el) return "null"
//     return el.className || el.tagName;
//   }

//   log.value += event.type + ': ' +
//     'target=' + str(event.target) +
//     ', relatedTarget=' + str(event.relatedTarget) + "\n";
//   log.scrollTop = log.scrollHeight;

//   if (event.type == 'mouseover') {
//     event.target.style.background = 'pink'
//   }
//   if (event.type == 'mouseout') {
//     event.target.style.background = ''
//   }
// }