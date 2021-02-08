/* global data */
/* exported data */

var imageField = document.getElementById('image-URL');
var imageChange = document.querySelector('.image-to-change');
imageField.addEventListener('input', changeImage);
// var submitButton = document.getElementById('Save');
// submitButton.addEventListener('submit', submitAction);

function changeImage(event) {
  imageChange.setAttribute('src', imageField.value);
}
// function submitAction(event) {

// }
