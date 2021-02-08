/* global data */
/* exported data */

var imageField = document.getElementById('image-URL');
var imageChange = document.querySelector('.image-to-change');
imageField.addEventListener('input', changeImage);

function changeImage(event) {
  imageChange.setAttribute('src', imageField.value);
}
