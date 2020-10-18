console.log("Connected");

// DOM elements
const button = document.getElementById("taskButton");
const list = document.getElementById("taskList");
const message = document.getElementById("taskMessage");

// DOM events
button.addEventListener("click", addTaskEvent);

// Methods
function addTaskEvent(event) {
  const taskName = prompt("Please write your task", "new task");

  if (taskName != null) {
    const item = createTaskItem(taskName);

    list.appendChild(item);
  }
}

function removeTaskEvent(event) {
  const item = event.target.parentNode;

  console.log(item);
  list.removeChild(item);
}

function createTaskItem(name) {
  const item = document.createElement("li");
  const input = document.createElement("input");
  const span = document.createElement("span");

  item.appendChild(input);
  item.appendChild(span);

  input.setAttribute("type", "checkbox");
  input.addEventListener("change", removeTaskEvent);
  span.innerText = name;

  return item;
}
