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

