const wrap = document.querySelector('.wrapper');
const desc = document.querySelector('.desc');
const description = document.querySelector('.desc_description');


const header = document.querySelector('.header');
window.onmousewheel = () => {
  if (window.scrollY >= 54) {
    console.log('down');
    header.classList.add('_scroll');
  } else {
    console.log('else');
    header.classList.remove('_scroll');
  }
}

// window.addEventListener('scroll', function() {
//   if (window.scrollY >= 54) {
//     header.classList.addClass('header--scrolling'); // Добавить класс, который будет менять стили
//   } else {
//     header.classList.removeClass('header--scrolling'); // Убрать
//   }
// });
// function watchHeader(entries) {
//   console.log();
//   if (entries[0].isIntersecting) {
//     entries[0].target.classList.remove('._scroll');
//   } else {
//     entries[0].target.classList.add('._scroll');
//   }
// }

// const headerObserver = new IntersectionObserver(watchHeader,);
// headerObserver.observe(headerElement);



// wrap.onmousewheel = () => {
//   header.style.backgroundColor = 'rgba(0, 0, 0, .3)';
//   header.style.padding = '0.5em 1em'
//   console.log('scroll');
// }



// wrap.addEventListener("mousewheel", () => {
//   console.log('scrolling');
//   header.style.backgroundColor = 'rgba(0, 0, 0, .3)';
//   header.style.padding = '0.5em 1em';

// })



