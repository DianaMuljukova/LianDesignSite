var searchBlock = document.querySelector('.search-block');

var searhIcon = document.querySelector('.fa-search');

var exit = document.querySelector('.fa-times')


searhIcon.onclick = function (e) {
  searchBlock.style.display = 'flex';
  searchBlock.style.alignItems = 'flex-end';

  searhIcon.style.display = 'none';
};

exit.onclick = function (e) {
  searchBlock.style.display = 'none';
  searhIcon.style.display = 'block';
}

//меню

var nav = document.querySelector('nav');
var menuIcon = document.querySelector('.menu__icon');

if (document.documentElement.clientWidth < 480){
  nav.style.display = 'none';
  menuIcon.style.display = 'block';
} else {
  nav.style.display = 'block';
  menuIcon.style.display = 'none';
}

var isPressed = false;

menuIcon.onclick = function (e) {
if (isPressed == false){
  nav.style.display = 'block';
  isPressed = true;
} else {
  nav.style.display = 'none';
  isPressed = false;
}
}