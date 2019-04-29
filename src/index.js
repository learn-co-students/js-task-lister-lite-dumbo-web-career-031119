document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");

  newTaskForm.addEventListener("submit", createNewTask);

  const tasks = document.getElementById("tasks")

  tasks.addEventListener("click", () => {
    if (event.target.nodeName === "BUTTON") {
      event.target.parentElement.remove()
    }
  })

});

const createNewTask = event => {
  event.preventDefault();
  let newTaskDescription = document.getElementById("new-task-description").value;
  const newTask = document.createElement('li');
  const tasksList = document.getElementById("tasks");
  const removeButton = document.createElement('button');

  removeButton.innerText = "X"
  removeButton.setAttribute("data-description", newTaskDescription);

  newTask.innerText = newTaskDescription;
  newTask.appendChild(removeButton);

  tasksList.appendChild(newTask);

  event.target.reset();

}
