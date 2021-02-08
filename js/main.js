/* global data */
/* exported data */

var imageField = document.getElementById('image-URL');
var titleField = document.getElementById('Title');
var notesField = document.getElementById('Notes');
var imageChange = document.querySelector('.image-to-change');
imageField.addEventListener('input', changeImage);
// var entryID = 0
var nextEntryId = 1;
var formField = document.querySelector('form');
formField.addEventListener('submit', submitAction);
function changeImage(event) {
  imageChange.setAttribute('src', imageField.value);
}
function submitAction(event) {
  event.preventDefault();
  var inputs = {
    image: imageField.value,
    title: titleField.value,
    notes: notesField.value
  };
  inputs.nextEntryId = nextEntryId;
  // console.log(inputs)
}
