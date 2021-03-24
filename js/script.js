// Properties
const storageKey = "todo";
const titles = [];
const ulList = document.getElementById("taskList");
const button = document.getElementById("taskButton");

// Init
button.addEventListener("click", onAddTask);
start(storageKey, titles, ulList);

// Methods
// Pure
function start(key, titles, ulList) {
  const localStorageData = loadData(key);

  if (localStorageData !== null) {
    titles.push(...localStorageData);
    displayItems(titles, ulList);
  }
}

// Pure
function displayItems(titles, html) {
  for (let i = 0; i < titles.length; i++) {
    const item = createTaskItem(titles[i], onRemoveTask);

    html.appendChild(item);
  }
}
