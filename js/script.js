const wrap = document.querySelector('.wrapper');
const desc = document.querySelector('.desc');
const header = document.querySelector('.header');

wrap.onmousewheel = () => {
  header.style.backgroundColor = 'rgba(0, 0, 0, .2)'
  console.log('scroll');
}
// if (wrap.clientWidth <= 1120) {
//   desc.style.display = "none";
// }

