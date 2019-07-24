
var wrapperInputs = document.querySelectorAll('.wrapper-input');

for (var i = 0; i < wrapperInputs.length; i++){
  var div = document.createElement('div');
  wrapperInputs[i].appendChild(div);
  div.classList.add('range-block');
  //console.log(wrapperInputs[i]);
};


function f(event) {

  if(event.target.tagName = 'input'){
    var target = event.target;
    //var divs = document.querySelectorAll('.range-block');
    //console.log(divs);
    var div = target.nextElementSibling;
    div.innerHTML = target.value + '%';
    div.style.padding = '5px';
    div.style.left = target.value * (target.clientWidth / 100) +'px';
  }
};



/*var wrapperInput = document.querySelector('.wrapper-input');
var div = document.createElement('div');
wrapperInput.appendChild(div);
div.classList.add('range-block');

function f(event) {

  if(event.target.tagName = 'input'){
    var target = event.target;
    console.log(div);
    div.innerHTML = target.value + '%';
    div.style.padding = '5px';
    div.style.left = target.value * (target.clientWidth / 100) +'px';
    // console.log(event.type);
  }
};*/

