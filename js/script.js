// declare variable
let form = document.getElementById('task-form');
let taskList = document.getElementById('task-list');
let deleteAllButton = document.getElementById('delete-all-btn');
let inputBox = document.getElementById('input-box');

// event listener
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
deleteAllButton.addEventListener('click', deleteAllTasks);

// add task function
function addTask(event) {
    if (inputBox.value == '') {
        alert('please add a task!!');
    } else {
        let li = document.createElement('li');
        let createText = document.createTextNode(inputBox.value + ' ');
        li.appendChild(createText);
        let removeBtn = document.createElement('a');
        removeBtn.setAttribute('href', '#');
        removeBtn.innerHTML = `x`;
        removeBtn.style.textDecoration = 'none';
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        inputBox.value = '';
    }
    event.preventDefault();
}

// remove task function
function removeTask(event) {
    if (event.target.hasAttribute('href')) {
        let ele = event.target.parentElement;
        ele.remove();
    }
}

// delete all funtion
function deleteAllTasks() {
    taskList.innerHTML = '';
}