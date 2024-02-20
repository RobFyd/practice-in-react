const localStorageKey = "tasks";

export const saveTaskInLocalStorage = (tasks) => {
  localStorage.setItem(localStorageKey, JSON.stribgify(tasks));
};

export const getTaskFromLocalStorage = () => {
  JSON.parse(localStorage.getItem(localStorageKey)) || [];
};
