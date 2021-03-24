// Properties
const localStorageKey = "todo";
const listTitles = [];
const listHTML = document.getElementById("taskList");
const buttonHTML = document.getElementById("taskButton");

// Init
start(localStorageKey);

// Methods
function start(key) {
  const localStorageInformation = loadData(key);

  buttonHTML.addEventListener("click", addTaskEvent);

  if (localStorageInformation !== null) {
    listTitles.push(...localStorageInformation);
    displayItems(listTitles);
  }
}

function displayItems(listTitles) {
  for (i = 0; i < listTitles.length; i++) {
    const item = createTaskItem(listTitles[i]);

    listHTML.appendChild(item);
  }
}
