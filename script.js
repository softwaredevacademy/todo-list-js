// Data
const key = "todo";
let data = [];

// DOM elements
const button = document.getElementById("taskButton");
const list = document.getElementById("taskList");
const message = document.getElementById("taskMessage");

// DOM events
button.addEventListener("click", addTaskEvent);

// Init
start(key);
//localStorage.removeItem(key);

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

function addTaskEvent(event) {
  const name = prompt("Please write your task", "new task ");

  if (name != null) {
    data.push(name);
    saveData(key, data);

    const item = createTaskItem(name, data.length);
    list.appendChild(item);
  }
}

function removeTaskEvent(event, index) {
  const item = event.target.parentNode;

  data.splice(index, 1);
  console.log("removeTaskEvent index", index);
  console.log(data);
  saveData(key, data);
  list.removeChild(item);
}

function createTaskItem(name, index) {
  console.log("createTaskItem index", index);
  const item = document.createElement("li");
  const input = document.createElement("input");
  const span = document.createElement("span");

  item.appendChild(input);
  item.appendChild(span);

  input.setAttribute("type", "checkbox");
  input.addEventListener("change", (event) => removeTaskEvent(event, index));
  span.innerText = name;

  return item;
}

function saveData(key, data) {
  const serializedData = data.join();

  localStorage.setItem(key, serializedData);
}

function loadData(key) {
  const rawData = localStorage.getItem(key);
  console.log(rawData);

  if (rawData === null) {
    return null;
  }

  const parsedData = rawData.split(",");
  return parsedData;
}
