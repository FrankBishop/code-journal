/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var list = document.querySelector('ul');
var i = 0;

window.addEventListener('DOMContentLoaded', addPastJournals);

window.addEventListener('beforeunload', localStorageSet);

var previousData = localStorage.getItem('code-journal-data');
if (previousData !== null) {
  data = JSON.parse(previousData);
}

function localStorageSet(event) {
  var storedData = JSON.stringify(data);
  localStorage.setItem('code-journal-data', storedData);
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
