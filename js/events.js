// Note: Impure because depends on titles, ulList and storageKey

function onAddTask() {
  const title = prompt("Please write your task", "new task ");
  const item = createItem(title, onRemoveTask);
  if (!title) return;

  titles.push(title);
  ulList.appendChild(item);
  saveData(storageKey, titles);
}

function onRemoveTask(event) {
  const item = event.target.closest("li");
  const nodes = Array.from(ulList.children);
  const index = nodes.indexOf(item);

  titles.splice(index, 1);
  ulList.removeChild(item);
  saveData(storageKey, titles);
}
