/* global data */
/* exported data */

var imageField = document.querySelector('#image-URL');
var titleField = document.querySelector('#Title');
var notesField = document.querySelector('#Notes');
var imageChange = document.querySelector('.image-to-change');
imageField.addEventListener('input', changeImage);
var entryID = 0;
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
  inputs.entryId = entryID++;
  inputs.nextEntryId = nextEntryId++;
  data.nextEntryId = data.nextEntryId++;
  data.entries.push(inputs);
  imageChange.setAttribute('src', 'images/placeholder-image-square.jpg');
  formField.reset();
  var storedData = JSON.stringify(data);
  localStorage.setItem('Coding Notes Entries', storedData);
}
