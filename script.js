
let oldTask;
function cross(checkbox) {
  if (checkbox.checked) {
    const task = checkbox.parentNode;
    const taskText = task.querySelector('span');
    oldTask = taskText.textContent;
    taskText.className = 'msg-1'
    taskText.textContent = 'DONE!';
    checkbox.remove();
    setTimeout(() =>{
      taskText.remove();
    },2000)
  }
  const completedList = document.querySelector('.completed-task');
  const temp = document.createElement('div');
  temp.className = 'completed';
  temp.innerHTML = `<span>${oldTask}</span>`
  completedList.appendChild(temp);
  
}

function addTask() {
  const input = document.querySelector('.add-task');
  const newTaskValue = input.querySelector('input').value;

  if (newTaskValue.trim() === '') {
    // Do not add empty tasks
    return;
  }

  const taskList = document.querySelector('.task-list');
  const existingTask = document.querySelector('.task');

  const newTask = document.createElement('div');
  newTask.className = 'task';
  newTask.innerHTML = `<input type="checkbox" onChange="cross(this)" >
    <span>${newTaskValue}</span>`;

  taskList.insertBefore(newTask, existingTask.nextSibling);
  input.querySelector('input').value = '';
}
