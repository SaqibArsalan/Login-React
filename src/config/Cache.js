
export const saveToLocal = (data, key, isJson = true) => {
  let saveData = data;

  if (data && isJson) {
    saveData = JSON.stringify(data);
    global.localStorage.setItem(key, saveData);
  }

};

export const getFromLocal = (key, isJson = true) => {
  let data = global.localStorage.getItem(key);

  if (data && isJson) {
    data = JSON.parse(data);
  }

  return data;
};

export const removeFromLocal = (key) => {
  global.localStorage.removeItem(key);
};

export const existInLocal = (key) => global.localStorage.getItem(key) != null;
