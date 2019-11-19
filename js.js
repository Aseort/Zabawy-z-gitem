
const body = document.querySelector('body');
const buttonAddSticker = document.getElementById('plus');
 
let stickersIds = 1;
 
buttonAddSticker.addEventListener('click', addNewSticker);
 
function addNewSticker(){
 
    const id = stickersIds;
     
    const randomStickerCoord = Math.floor(Math.random()*500);
     
    const mainSticker = document.createElement('div');
    mainSticker.id = 'sticker'+id;
    mainSticker.classList.add('sticker');
    mainSticker.style.display='block';
    mainSticker.style.top =`${randomStickerCoord}px`;
    mainSticker.style.left =`${randomStickerCoord}px`;
 
    const headerSticker = document.createElement('div');
    headerSticker.classList.add('bar');
    headerSticker.addEventListener('mousedown',startMove);
 
    const delStickerButton = document.createElement('button');
    delStickerButton.onclick = function() {deleteSticker(id);};
    delStickerButton.innerText = 'X';
 
    const taskList = document.createElement('ul');
    taskList.id = 'task-list'+id;
 
    const addTaskForm = document.createElement('form');
    addTaskForm.classList.add('add-items');
 
    const taskInput = document.createElement('input');
    taskInput.setAttribute('type', 'text');
    taskInput.setAttribute('placeholder', 'treść notatki');
    taskInput.id = 'task-text'+id;
 
    const buttonsPanel = document.createElement('div');
    buttonsPanel.classList.add('save');
 
    const addTaskButton = document.createElement('button');
    addTaskButton.innerText = 'Save';
    addTaskButton.onclick = function(e) {
        e.preventDefault();
        addTask(id);
    };
 
    const delTasksButton = document.createElement('button');
    delTasksButton.id = 'enter1';
    delTasksButton.innerText='Delete';
    delTasksButton.onclick = function(e) {
        e.preventDefault();
        deleteAllTasks(id);
    };
 
    headerSticker.appendChild(delStickerButton);
 
    buttonsPanel.appendChild(addTaskButton);
    buttonsPanel.appendChild(delTasksButton);
 
    addTaskForm.appendChild(taskInput);
    addTaskForm.appendChild(buttonsPanel);
 
    mainSticker.appendChild(headerSticker);
    mainSticker.appendChild(taskList);
    mainSticker.appendChild(addTaskForm);
 
    body.appendChild(mainSticker);
 
    stickersIds++;
}
 
function deleteSticker(id){
    const deletedSticker = document.getElementById('sticker'+id);
    body.removeChild(deletedSticker);
}
 
function addTask(id){
    const taskList = document.getElementById('task-list'+id);
    const taskText = document.getElementById('task-text'+id).value;
 
    const newTask = document.createElement('li');
    newTask.innerHTML = taskText;
     
    taskList.appendChild(newTask);
    document.getElementById('task-text'+id).value = "";
}
 
function deleteAllTasks(id) {
    const taskList = document.getElementById('task-list'+id);
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
      }
}
 
function startMove(e) {
    const movedSticker = e.target.parentNode;
    movedSticker.addEventListener('mousemove', move);
}
 
function move(e) {
    const movedSticker = e.target.parentNode;
    movedSticker.style.position = 'absolute';
    movedSticker.style.top = e.clientY + 'px';
    movedSticker.style.left = e.clientX + 'px';
}
 
window.addEventListener('mouseup',endMove);
 
function endMove() {
    const allStickers = document.querySelectorAll('.sticker');
    for(let i=0;i<allStickers.length;i++){
        allStickers[0].removeEventListener('mousemove', move);
    }
}

