function createTaskItem(name, index) {
  const item = document.createElement("li");
  const input = document.createElement("input");
  const span = document.createElement("span");

  input.setAttribute("type", "checkbox");
  input.addEventListener("change", (event) => removeTaskEvent(event, index));
  span.innerText = name;

  item.appendChild(input);
  item.appendChild(span);
  return item;
}
