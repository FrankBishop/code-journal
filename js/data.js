/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

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
