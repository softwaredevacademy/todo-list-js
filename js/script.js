// Properties
const storageKey = "todo";
const titles = [];
const ulList = document.getElementById("taskList");
const button = document.getElementById("taskButton");

// Init
start(storageKey, titles, ulList);

// Methods
function start(key, titles, ulList) {
  const storageData = loadData(key);

  button.addEventListener("click", onAddTask);

  if (storageData !== null) {
    titles.push(...storageData);
    displayItems(titles, ulList);
  }
}

function displayItems(titles, html) {
  for (let i = 0; i < titles.length; i++) {
    const item = createTaskItem(titles[i], onRemoveTask);

    html.appendChild(item);
  }
}
