// Data
const key = "todo";
let data = [];

// DOM elements
const button = document.getElementById("taskButton");
const list = document.getElementById("taskList");

// DOM events
button.addEventListener("click", addTaskEvent);

// Init
start(key);

function start(key) {
  const loadedData = loadData(key);

  if (loadedData !== null) {
    data = loadedData;

    for (i = 0; i < data.length; i++) {
      const item = createTaskItem(data[i], i);

      list.appendChild(item);
    }
  }
}

function addTaskEvent() {
  const name = prompt("Please write your task", "new task ");

  if (name != null) {
    let item;

    data.push(name);
    item = createTaskItem(name, data.length);
    list.appendChild(item);
    saveData(key, data);
  }
}

function removeTaskEvent(event, index) {
  const item = event.target.parentNode;

  data.splice(index, 1);
  list.removeChild(item);
  saveData(key, data);
}

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

function saveData(key, data) {
  const serializedData = data.join();

  localStorage.setItem(key, serializedData);
}

function loadData(key) {
  const rawData = localStorage.getItem(key);
  let parsedData;

  if (rawData === null || rawData === "") {
    return null;
  }

  parsedData = rawData.split(",");
  return parsedData;
}
