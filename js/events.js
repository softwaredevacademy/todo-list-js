function onAddTask() {
  const title = prompt("Please write your task", "new task ");

  if (title != null) {
    const item = createTaskItem(title, onRemoveTask);

    listTitles.push(title);
    listHTML.appendChild(item);
    saveData(localStorageKey, listTitles);
  }
}

function onRemoveTask(event) {
  const item = event.target.closest("li");
  const nodes = Array.from(listHTML.children);
  const index = nodes.indexOf(item);

  listTitles.splice(index, 1);
  listHTML.removeChild(item);
  saveData(localStorageKey, listTitles);
}
