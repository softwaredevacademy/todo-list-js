// Note: We should not serialize and deserialize data here

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
