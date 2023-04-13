const wrap = document.querySelector('.wrapper');
const desc = document.querySelector('.desc');
const header = document.querySelector('.header');
const description = document.querySelector('.desc_description');

// wrap.onmousewheel = () => {
//   header.style.backgroundColor = 'rgba(0, 0, 0, .3)';
//   header.style.padding = '0.5em 1em'
//   console.log('scroll');
// }

wrap.addEventListener("mousewheel", () => {
  console.log('scrolling');
  header.style.backgroundColor = 'rgba(0, 0, 0, .3)';
  header.style.padding = '0.5em 1em';

})



