/* global data */
/* exported data */

var imageField = document.querySelector('#image-URL');
var titleField = document.querySelector('#title');
var notesField = document.querySelector('#notes');
var imageChange = document.querySelector('.image-to-change');
var entryID = 0;
var formField = document.querySelector('form');
imageField.addEventListener('input', changeImage);
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
  inputs.entryId = entryID++;
  inputs.nextEntryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(inputs);
  imageChange.setAttribute('src', 'images/placeholder-image-square.jpg');
  formField.reset();
  var storedData = JSON.stringify(data);
  localStorage.setItem('Coding Notes Entries', storedData);
}
