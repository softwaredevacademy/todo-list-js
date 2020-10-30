// Data
const localStorageKey = "todo";
let listInformation = [];

// DOM elements
const button = document.getElementById("taskButton");
const listHTML = document.getElementById("taskList");

// DOM events
button.addEventListener("click", addTaskEvent);

// Init
start(localStorageKey);

function start(key) {
  const localStorageInformation = loadData(key);

  if (localStorageInformation !== null) {
    listInformation = localStorageInformation;

    for (i = 0; i < listInformation.length; i++) {
      const item = createTaskItem(listInformation[i], i);

      listHTML.appendChild(item);
    }
  }
}
