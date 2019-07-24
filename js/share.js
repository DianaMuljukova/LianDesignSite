var button = document.getElementById('share-button');
var menu = document.querySelector('.share-menu');
button.style.zIndex = '10';
var isPressed = false;

button.onclick = function () {
  if (isPressed){
    menu.style.opacity = '0';
    menu.style.transform = 'translateX(0px)';
    isPressed = false;
  } else {
    menu.style.zIndex = '8';
    menu.style.opacity = '1';
    menu.style.transform = 'translateX(100px)';
    isPressed = true;
  }
};




