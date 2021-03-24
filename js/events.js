function addTaskEvent() {
  const title = prompt("Please write your task", "new task ");

  if (title != null) {
    let item;

    listTitles.push(title);
    item = createTaskItem(title);
    listHTML.appendChild(item);
    saveData(localStorageKey, listTitles);
  }
}

function removeTaskEvent(event) {
  const item = event.target.closest("li");
  const nodes = Array.from(listHTML.children);
  const index = nodes.indexOf(item);

  console.log("remove, nodes, listHTML");
  console.log(nodes);
  console.log(listHTML);

  listTitles.splice(index, 1);
  listHTML.removeChild(item);
  saveData(localStorageKey, listTitles);
}
