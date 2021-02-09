/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

// var entries = document.querySelector('.entries');
var list = document.querySelector('ul');

window.addEventListener('load', storedDataLoad);

window.addEventListener('beforeunload', localStorageSet);

function localStorageSet(event) {
  var storedData = JSON.stringify(data);
  localStorage.setItem('code-journal-data', storedData);
}

function storedDataLoad(event) {
  var previousData = localStorage.getItem('code-journal-data');
  if (previousData !== null) {
    data = JSON.parse(previousData);
  }
}
addJournal();

function addJournal(entry) {
  var listElement = document.createElement('li');
  list.appendChild(listElement);
  var entryRow = document.createElement('div');
  listElement.appendChild(entryRow);
  entryRow.className = 'row';
  var entryImage = document.createElement('img');
  entryRow.appendChild(entryImage);
  entryImage.className = 'column-half';
  entryImage.setAttribute('src', data.entries[0].image);
  var entryMain = document.createElement('div');
  entryRow.appendChild(entryMain);
  entryMain.className = 'column-half';
  var entryHeader = document.createElement('h1');
  entryMain.appendChild(entryHeader);
  entryHeader.textContent = data.entries[0].title;
  var entryText = document.createElement('p');
  entryMain.appendChild(entryText);
  entryText.textContent = data.entries[0].notes;
}
