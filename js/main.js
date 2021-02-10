/* global data */
/* exported data */

var imageField = document.querySelector('#image-URL');
var titleField = document.querySelector('#title');
var notesField = document.querySelector('#notes');
var imageChange = document.querySelector('.image-to-change');
var formField = document.querySelector('form');
var list = document.querySelector('ul');
var i = 0;
window.addEventListener('DOMContentLoaded', addPastJournals);
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
  inputs.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(inputs);
  addJournal(data.entries[0]);
  imageChange.setAttribute('src', 'images/placeholder-image-square.jpg');
  formField.reset();
  window.location.href = '#entries';
}
function addJournal(entry) {
  var listElement = document.createElement('li');
  list.appendChild(listElement);
  var entryRow = document.createElement('div');
  listElement.appendChild(entryRow);
  entryRow.className = 'row';
  var entryImage = document.createElement('img');
  entryRow.appendChild(entryImage);
  entryImage.className = 'column-half';
  entryImage.setAttribute('src', data.entries[i].image);
  var entryMain = document.createElement('div');
  entryRow.appendChild(entryMain);
  entryMain.className = 'column-half';
  var entryHeader = document.createElement('h1');
  entryMain.appendChild(entryHeader);
  entryHeader.textContent = data.entries[i].title;
  var entryText = document.createElement('p');
  entryMain.appendChild(entryText);
  entryText.textContent = data.entries[i].notes;
}

function addPastJournals(event) {
  for (i = 0; i < data.entries.length - 1; i++) {
    addJournal(data.entries[i]);
  }
}
