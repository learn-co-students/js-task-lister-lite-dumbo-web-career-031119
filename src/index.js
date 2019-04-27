document.addEventListener("DOMContentLoaded", () => {
  // your code here


  const taskForm = document.getElementById('create-task-form');
  const taskDescription = document.getElementById('new-task-description');
  console.log(taskForm)
  console.log(taskDescription)


  taskForm.addEventListener('submit', (form_event) => {
    form_event.preventDefault()
    const tasksUl = document.querySelector('#tasks')
    console.log(tasksUl)
    const li = document.createElement('li');
    li.append(taskDescription.value)
    tasksUl.append(li)

    addBtn = document.createElement('button')
    li.append(addBtn)
    addBtn.append('delete')

  addBtn.addEventListener('click', (remove) => {
    console.log(remove.target.parentElement.remove())
  })

  })
});
