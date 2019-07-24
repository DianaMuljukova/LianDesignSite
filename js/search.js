var searchBlock = document.querySelector('.search-block');

var searhIcon = document.querySelector('.fa-search');

var exit = document.querySelector('.fa-times')


searhIcon.onclick = function (e) {
  searchBlock.style.display = 'flex';
  searchBlock.style.alignItems = 'flex-end';
  searchBlock.style.position = 'absolute';
  searchBlock.style.top = '-100%';
  searchBlock.style.left = '100%';
  searhIcon.style.display = 'none';
};

exit.onclick = function (e) {
  searchBlock.style.display = 'none';
  searhIcon.style.display = 'block';
}