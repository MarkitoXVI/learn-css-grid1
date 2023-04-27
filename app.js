
let tasks = [];


function addTask(event) {
  
  event.preventDefault();
  
  
  const taskInput = document.getElementById('task');
  const task = taskInput.value.trim();

 
  if (task) {
    tasks.push(task);
    taskInput.value = '';
    displayTasks();
  }
}


function displayTasks() {
  const taskList = document.getElementById('task-list');
  
  taskList.innerHTML = '';
 
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    
    const button = document.createElement('button');
    button.textContent = 'Dzēst';
    button.onclick = () => {
      tasks.splice(index, 1);
      displayTasks();
    };
    li.appendChild(button);
    taskList.appendChild(li);
  });
}

displayTasks();

const taskForm = document.getElementById('task-form');
taskForm.addEventListener('submit', addTask);
