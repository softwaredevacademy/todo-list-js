function createTaskItem(title) {
  const item = document.createElement("li");
  const input = document.createElement("input");
  const span = document.createElement("span");

  input.setAttribute("type", "checkbox");
  input.addEventListener("change", removeTaskEvent);
  span.innerText = title;

  item.appendChild(input);
  item.appendChild(span);
  return item;
}
