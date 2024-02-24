// app.js
import { getAllTasks } from "./tasks";

const main = () => {
  console.log("Welcome to Task Manager");

  const tasks = getAllTasks();
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
};

main();
