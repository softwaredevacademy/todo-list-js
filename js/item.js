// Pure
function createTaskItem(title, onDelete) {
  // Create HTML tags
  const item = document.createElement("li");
  const input = document.createElement("input");
  const span = document.createElement("span");

  // Set HTML properties
  input.setAttribute("type", "checkbox");
  input.addEventListener("change", onDelete);
  span.innerText = title;

  // Add HTML tags inside item
  item.appendChild(input);
  item.appendChild(span);

  return item;
}
