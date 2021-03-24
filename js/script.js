// Properties
const localStorageKey = "todo";
const listTitles = [];
const listHTML = document.getElementById("taskList");
const buttonHTML = document.getElementById("taskButton");

// Init
buttonHTML.addEventListener("click", addTaskEvent);
start(localStorageKey);

// Methods
function start(key) {
  const localStorageData = loadData(key);

  if (localStorageData !== null) {
    listTitles.push(...localStorageData);
    displayItems(listTitles);
  }
}

function displayItems(titles) {
  for (let i = 0; i < titles.length; i++) {
    const item = createTaskItem(titles[i]);

    listHTML.appendChild(item);
  }
}
