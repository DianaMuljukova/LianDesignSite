//var arr = [];
//var divs = document.querySelectorAll('.filter__item')
//var columns = document.querySelectorAll('.column');
//var box = document.createElement('div');
//var filter = document.querySelector('.filter');
//filter.appendChild(box);

var divs = document.querySelectorAll('.filter__item');

var moveBlocks = function (filter) {
  var columns = document.querySelectorAll('.column');

  //console.log(divs, columns);

  for (var i = 0; i < columns.length; i++) {
    columns[i].innerHTML = '';
  }

  var filteredDiv = [];

  if (filter === 'all') {
    filteredDiv = divs;
  } else {
    for (var i = 0; i < divs.length; i++) {
      if (divs[i].getAttribute('filter') === filter) {
        filteredDiv.push(divs[i]);
      }
    }
  }



  console.log(filteredDiv, columns);

  for (var i = 0; i < filteredDiv.length; i += 3) {
    if (filteredDiv[i]) {
      columns[0].appendChild(filteredDiv[i])
    }
    if (filteredDiv[i + 1]) {
      columns[1].appendChild(filteredDiv[i + 1])
    }
    if (filteredDiv[i + 2]) {
      columns[2].appendChild(filteredDiv[i + 2])
    }
  }
}



portfolio.onclick = function (event) {
  var target = event.target;
  var filter = target.getAttribute('filter');

  if (filter && target.tagName == 'A') {

    moveBlocks(filter);
  }

  return false;
};

///

var filterItem = document.querySelector('.filter__item');
var img = document.getElementById('img');
var col = document.getElementById('col');
var computedStyle1 = getComputedStyle(filterItem);
var computedStyle2 = getComputedStyle(col);
var computedStyle3 = getComputedStyle(img);
console.log(computedStyle1.height);
console.log(computedStyle2.height);
console.log(computedStyle3.height);
computedStyle2.height = computedStyle3.height
