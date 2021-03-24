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
  titles.map((title) => {
    const item = createItem(title, onRemoveTask);

    ulList.appendChild(item);
  });
}
