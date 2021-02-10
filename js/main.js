/* global data */
/* exported data */

var imageField = document.querySelector('#image-URL');
var titleField = document.querySelector('#title');
var notesField = document.querySelector('#notes');
var imageChange = document.querySelector('.image-to-change');
var formContainer = document.querySelector('.form-container');
var formField = document.querySelector('form');
var entiresLink = document.querySelector('.entries-link');
var entries = document.querySelector('#entries');
var newButton = document.querySelector('.new-button');
var list = document.querySelector('ul');
// var listElement = document.createElement('li');
var i = 0;
window.addEventListener('DOMContentLoaded', addPastJournals);
imageField.addEventListener('input', changeImage);
formField.addEventListener('submit', submitAction);
entiresLink.addEventListener('click', changeToEntries);
newButton.addEventListener('click', addNewEntry);
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
  var $newEntry = addJournal(data.entries[0]);
  list.prepend($newEntry);
  imageChange.setAttribute('src', 'images/placeholder-image-square.jpg');
  formField.reset();
  changeToEntries();
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
  entryImage.setAttribute('src', entry.image);
  var entryMain = document.createElement('div');
  entryRow.appendChild(entryMain);
  entryMain.className = 'column-half';
  var entryHeader = document.createElement('h1');
  entryMain.appendChild(entryHeader);
  entryHeader.textContent = entry.title;
  var icon = document.createElement('i');
  entryHeader.appendChild(icon);
  icon.className = 'fas fa-edit icon';
  var entryText = document.createElement('p');
  entryMain.appendChild(entryText);
  entryText.textContent = entry.notes;
  listElement.setAttribute('data-entry-id', entry.entryId);
  return listElement;
}

function addPastJournals(event) {
  for (i = 0; i < data.entries.length - 1; i++) {
    addJournal(data.entries[i]);
  }
}

function changeToEntries(event) {
  formContainer.className = 'hidden';
  entries.className = 'container entries';
  newButton.className = 'new-button';
}

function addNewEntry(event) {
  entries.className = 'hidden';
  newButton.className = 'hidden';
  formContainer.className = 'container';
}
