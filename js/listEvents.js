function addTaskEvent() {
  const title = prompt("Please write your task", "new task ");

  if (title != null) {
    let item;

    listInformation.push(title);
    item = createTaskItem(title);
    listHTML.appendChild(item);
    saveData(localStorageKey, listInformation);
  }
}

function removeTaskEvent(event) {
  const item = event.target.closest("li");
  const nodes = Array.from(item.closest("ol").children);
  const index = nodes.indexOf(item);

  listInformation.splice(index, 1);
  listHTML.removeChild(item);
  saveData(localStorageKey, listInformation);
}
