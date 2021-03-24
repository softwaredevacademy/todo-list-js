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
  titles.push(...storageData);
  displayItems(titles, ulList);
}

function displayItems(titles, ulList) {
  for (let i = 0; i < titles.length; i++) {
    const item = createItem(titles[i], onRemoveTask);

    ulList.appendChild(item);
  }
}
