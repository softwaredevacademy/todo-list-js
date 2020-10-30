function addTaskEvent() {
  const name = prompt("Please write your task", "new task ");

  if (name != null) {
    let item;

    listInformation.push(name);
    item = createTaskItem(name, listInformation.length);
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
