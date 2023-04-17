const wrap = document.querySelector('.wrapper');
const desc = document.querySelector('.desc');
const description = document.querySelector('.desc_description');
const header = document.querySelector('.header');



//СКРОЛ МИШІ ВНИЗ
window.onmousewheel = () => {
  if (window.scrollY >= 54) {
    header.classList.add('_scroll');
  } else {
    header.classList.remove('_scroll');
  }
}

//СВАЙП ВНИЗ
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
let x1 = null;
let y1 = null;

function handleTouchStart(event) {
 const firstTouch = event.touches[0];
 x1 = firstTouch.clientX;
 y1 = firstTouch.clientY;
//  console.log(x1, y1);
}

function handleTouchMove(event) {
  if (!x1 || !y1) {
    return false
  }
  let x2 = event.touches[0].clientX;
  let y2 = event.touches[0].clientY;
  console.log(x2, y2);
  let xDiff = x2 - x1;
  let yDiff = y2 - y1;
  if (Math.abs(yDiff) > Math.abs(xDiff)) {
    if (yDiff < 0) {
      header.classList.add('_scroll');
    } else {
      header.classList.remove('_scroll')
    }
  }
  x1 = null;
  y1 = null
}



// document.ontouchstart = (event) => {
//   console.log(event, 'touch');
// }

// document.ontouchmove = (event) => {
//   console.log(event, 'moveee');
// }




// const touchFunction = () => {
//   if (window.clientY <= 54) {
//     header.classList.add('_scroll');
//   } else {
//     header.classList.remove('_scroll');
//   }
// }
// window.addEventListener("touch", touchFunction);
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



