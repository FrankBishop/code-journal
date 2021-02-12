/* global data */
/* exported data */

var imageField = document.querySelector('#image-URL');
var titleField = document.querySelector('#title');
var notesField = document.querySelector('#notes');
var imageChange = document.querySelector('.image-to-change');
var formContainer = document.querySelector('.form-container');
var formField = document.querySelector('form');
var entriesLink = document.querySelector('.entries-link');
var entries = document.querySelector('#entries');
var newButton = document.querySelector('.new-button');
var list = document.querySelector('ul');
var formHeader = document.querySelector('.form-header');
var deletePlaceholder = document.querySelector('.deletePlaceholder');
var deleteModal = document.querySelector('.delete-modal');
var deleteButton = document.querySelector('.delete-button-button');
var cancelButton = document.querySelector('.cancel-button');
var deleteConfirmButton = document.querySelector('.delete-confirm-button');

var i = 0;
window.addEventListener('DOMContentLoaded', addPastJournals);
imageField.addEventListener('input', changeImage);
formField.addEventListener('submit', submitAction);
entriesLink.addEventListener('click', changeToEntries);
newButton.addEventListener('click', addNewEntry);
deleteButton.addEventListener('click', deleteEntryModal);
cancelButton.addEventListener('click', closeModal);
deleteConfirmButton.addEventListener('click', deleteEntry);

function changeImage(event) {
  imageChange.setAttribute('src', imageField.value);
}

function submitAction(event) {
  if (data.editing === null) {
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
  } else {
    event.preventDefault();
    inputs = {
      image: imageField.value,
      title: titleField.value,
      notes: notesField.value
    };
    inputs.entryId = data.editing.entryId;
    data.editing.image = inputs.image;
    data.editing.title = inputs.title;
    data.editing.notes = inputs.notes;
    var oldEntry = document.querySelector('[data-entry-id="' + data.editing.entryId + '"]');
    var editedEntry = addJournal(data.editing);
    list.replaceChild(editedEntry, oldEntry);
    imageChange.setAttribute('src', 'images/placeholder-image-square.jpg');
    formField.reset();
    changeToEntries();
    data.editing = null;
  }
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
  list.addEventListener('click', edit);
  return listElement;
}

function addPastJournals(event) {
  data.editing = null;
  for (i = 0; i < data.entries.length - 1; i++) {
    addJournal(data.entries[i]);
  }
}

function changeToEntries(event) {
  // console.log('is this running too?')
  formContainer.className = 'hidden';
  entries.className = 'container entries';
  newButton.className = 'new-button';
}

function addNewEntry(event) {
  entries.className = 'hidden';
  newButton.className = 'hidden';
  formContainer.className = 'container';
  formHeader.textContent = 'New Entry';
  deletePlaceholder.className = 'hidden';
}

function edit(event) {
  var target = event.target;
  var clickTarget = event.target.matches('.fas');
  var parentEntry = target.closest('li');
  var j = 0;
  if (clickTarget) {
    addNewEntry();
    var number = parentEntry.getAttribute('data-entry-id');
    number = JSON.parse(number);
    for (j = 0; j < data.entries.length; j++) {
      if (number === data.entries[j].entryId) {
        data.editing = data.entries[j];
        editEntry(data.editing);
      }
    }
  }
}

function editEntry(entry) {
  imageField.value = entry.image;
  titleField.value = entry.title;
  notesField.value = entry.notes;
  imageChange.setAttribute('src', entry.image);
  formHeader.textContent = 'Edit Entry';
  deletePlaceholder.className = 'delete-button';
}

function deleteEntryModal(event) {
  // console.log('this is deleting');
  // event.preventDefault()
  formContainer.className = 'form-container container';
  entries.className = 'hidden';
  deleteModal.className = 'modal';
}

function closeModal(event) {
  deleteModal.className = 'hidden';

}

function deleteEntry(event) {
  // event.preventDefault();
  // console.log('the delete button works');

  var deleteEntry = document.querySelector('[data-entry-id="' + data.editing.entryId + '"]');
  // console.log(deleteEntry);
  deleteEntry.remove();
  imageChange.setAttribute('src', 'images/placeholder-image-square.jpg');
  deleteModal.className = 'hidden';
  formField.reset();
  changeToEntries();
}
