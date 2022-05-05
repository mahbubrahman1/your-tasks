// declare variable
let form = document.getElementById('task-form');
let taskList = document.getElementById('task-list');
let deleteAllButton = document.getElementById('delete-all-btn');
let inputBox = document.getElementById('input-box');

// event listener
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
deleteAllButton.addEventListener('click', deleteAllTasks);
document.addEventListener('DOMContentLoaded', getTasks)

// add task function
function addTask(event) {
    if (inputBox.value === '') {
        alert('please add a task!!');
    } else {
        // create li
        let li = document.createElement('li');
        let createText = document.createTextNode(inputBox.value + ' ');
        li.appendChild(createText);

        // create close button using link or href
        let removeBtn = document.createElement('a');
        removeBtn.setAttribute('href', '#');
        removeBtn.innerHTML = `x`;

        removeBtn.style.textDecoration = 'none';
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        storeLocalStorage(inputBox.value);

        // clear the input text
        inputBox.value = '';
    }
    event.preventDefault();
}

// remove task function
function removeTask(event) {
    if (event.target.hasAttribute('href')) {
        let ele = event.target.parentElement;
        ele.remove();
        removeFromLocalStorage(ele);
    }
}

// delete all funtion
function deleteAllTasks() {
    taskList.innerHTML = '';
}

// tasks store in local storage
function storeLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// get tasks from local storage
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(task => {
        let li = document.createElement('li');
        let createText = document.createTextNode(task + ' ');
        li.appendChild(createText);
        let removeBtn = document.createElement('a');
        removeBtn.setAttribute('href', '#');
        removeBtn.innerHTML = `x`;
        removeBtn.style.textDecoration = 'none';
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    });
}

// remove from storage
function removeFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    let li = taskItem;
    li.removeChild(li.lastChild);
    tasks.forEach((task, index) => {
        if (li.textContent.trim() === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}