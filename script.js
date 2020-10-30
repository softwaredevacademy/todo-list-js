// Data
const localStorageKey = "todo";
let listInformation = [];

// DOM elements
const button = document.getElementById("taskButton");
const listHTML = document.getElementById("taskList");

// DOM events
button.addEventListener("click", addTaskEvent);

// Init
start(localStorageKey);

function start(key) {
  const localStorageInformation = loadData(key);

  if (localStorageInformation !== null) {
    listInformation = localStorageInformation;

    for (i = 0; i < listInformation.length; i++) {
      const item = createTaskItem(listInformation[i], i);

      listHTML.appendChild(item);
    }
  }
}

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

function removeTaskEvent(event, index) {
  const item = event.target.parentNode;

  listInformation.splice(index, 1);
  listHTML.removeChild(item);
  saveData(localStorageKey, listInformation);
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
