// tasks.js
const tasks = ["Complete coding challenge", "Review pull requests", "Fix bugs"];

export const getAllTasks = () => {
  return tasks;
};

export const addTask = (newTask) => {
  tasks.push(newTask);
};

// Uncomment the line below to introduce a conflict
// export const removeTask = (index) => tasks.splice(index, 1);
