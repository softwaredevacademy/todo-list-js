// Pure (but we should not serialize data here)
function saveData(key, data) {
  const serializedData = data.join();

  localStorage.setItem(key, serializedData);
}

// Pure (but we should split data here)
function loadData(key) {
  const rawData = localStorage.getItem(key);
  let parsedData;

  if (rawData === null || rawData === "") {
    return null;
  }

  parsedData = rawData.split(",");
  return parsedData;
}
