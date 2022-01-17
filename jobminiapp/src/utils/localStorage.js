const loadData = (key) => {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
};

const saveData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export { loadData, saveData };
