document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // console.log("test")
  const processInput = inputEvent => {
    inputEvent.preventDefault()
    // console.log(inputEvent.target[0].value)
    taskList.innerHTML += `<li>${inputEvent.target[0].value}</li>`
  }


  const taskForm = document.querySelector('#create-task-form')
  const taskList = document.querySelector('#tasks')
  taskForm.addEventListener('submit', processInput)
});