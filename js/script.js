// Data
const localStorageKey = "todo";
let listTitles = [];

// DOM elements
const listHTML = document.getElementById("taskList");
const button = document.getElementById("taskButton");

// DOM events
button.addEventListener("click", addTaskEvent);

// Init
start(localStorageKey);

function start(key) {
  const localStorageInformation = loadData(key);

  if (localStorageInformation !== null) {
    listTitles = localStorageInformation;

    for (i = 0; i < listTitles.length; i++) {
      const item = createTaskItem(listTitles[i]);

      listHTML.appendChild(item);
    }
  }
}
