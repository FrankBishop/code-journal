/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', localStorageSet);

var previousData = localStorage.getItem('code-journal-data');
if (previousData !== null) {
  data = JSON.parse(previousData);
}

function localStorageSet(event) {
  var storedData = JSON.stringify(data);
  localStorage.setItem('code-journal-data', storedData);
}
