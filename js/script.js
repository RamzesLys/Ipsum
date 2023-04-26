const wrap = document.querySelector('.wrapper');
const desc = document.querySelector('.desc');
const description = document.querySelector('.desc_description');
const header = document.querySelector('.header');
// const main = document.querySelector('.main');
const darkBg = document.querySelector('._eclipse');
const body = document.querySelector('.body')

// СКРОЛ МИШІ ВНИЗ
body.onmousewheel = () => { 
  // console.log('main ---- ' + main.getBoundingClientRect().top);
  // console.log('body ---- ' + document.body.scrollTop);
  if (document.body.scrollTop >= 50) {
    header.classList.add('_scroll');
 }  else {
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

//БОКОВЕ МЕНЮ СЕРВІСУ
const servicesMenuHidden = document.querySelector('.services_block-hidden');
const buttonService = document.querySelector('.link_services');
const buttonServiceClose = document.querySelector('.services_block-hidden-close');
const buttonServiceHidden = document.querySelector('.link_services-hidden');
// const mainMenu = document.querySelector('.main');
buttonService.onclick = () => {
  servicesMenuHidden.classList.add('active_services');
  darkBg.classList.add('_open')
}
buttonServiceHidden.onclick = () => {
  servicesMenuHidden.classList.add('active_services');
  console.log('hidden_work');
  darkBg.classList.add('_open');
}
buttonServiceClose.onclick = () => {
  servicesMenuHidden.classList.remove('active_services');
  darkBg.classList.remove('_open')
}

//BURGER-MENU
const headerHamb = document.querySelector('.header_hamb');
const menuHidden = document.querySelector('.header_hidden');

headerHamb.onclick = () => {
  headerHamb.classList.toggle('active');
  menuHidden.classList.toggle('active');
  mainMenu.classList.toggle('hide')
}

//ACTIVE BLOCK 
const servicesItems = document.querySelectorAll('.services_items');

servicesItems[0].onclick = () => {
  
}