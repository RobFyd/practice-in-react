const localStorageKey = "tasks";

export const saveTasksInLocalStorage = (tasks) => {
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));
};

export const getTasksFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem(localStorageKey)) || [];
};
