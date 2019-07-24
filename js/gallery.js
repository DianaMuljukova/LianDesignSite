var bigPhoto = document.getElementById('bigphoto');


ul.onclick = function (event) {
  var target = event.target;
  if(target.nodeName == 'IMG'){
    var href = target.parentElement.href;

    bigPhoto.src = href;
  }
  return false;
};


/*var bigPhoto = document.getElementById('bigphoto');


ul.onclick = function (event) {
  var target = event.target;
  if(target.nodeName == 'IMG'){
    var href = target.src;
    bigPhoto.src = href;
  }
  return false;
};*/