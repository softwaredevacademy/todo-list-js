// Properties
const localStorageKey = "todo";
const listTitles = [];
const listHTML = document.getElementById("taskList");
const buttonHTML = document.getElementById("taskButton");

// Methods
start(localStorageKey);

function start(key) {
  const localStorageInformation = loadData(key);
  buttonHTML.addEventListener("click", addTaskEvent);

  if (localStorageInformation !== null) {
    listTitles.push(...localStorageInformation);

    for (i = 0; i < listTitles.length; i++) {
      const item = createTaskItem(listTitles[i]);

      listHTML.appendChild(item);
    }
  }
}
