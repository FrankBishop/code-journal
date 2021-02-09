/* global data */
/* exported data */

var imageField = document.getElementById('image-URL');
var titleField = document.getElementById('Title');
var notesField = document.getElementById('Notes');
var imageChange = document.querySelector('.image-to-change');
imageField.addEventListener('input', changeImage);
// var entryID = 0
var nextEntryId = 1;
// var dataModel = {
//   entries
//   nextEntryId: 0
// };
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
  inputs.nextEntryId = data.nextEntryId;
  data.nextEntryId = nextEntryId++;
  data.entries.push(inputs);

  // console.log(inputs)
  // console.log(data)
}
