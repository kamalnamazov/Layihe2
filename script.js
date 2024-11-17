const taskInput = document.querySelector("#task-input");
const addButton = document.querySelector(".add-button");
const plusButton = document.querySelector(".plus-button");
const taskList = document.querySelector(".task-list");
const sortIcon = document.querySelector(".sort-icon");
const inputContainer = document.querySelector(".input-container");
const deleteButton = document.querySelector('.delete-button');
let tasks = [];
let sorting = true;

function renderTasks() {
    taskList.innerHTML = "";

    if(tasks.length > 0 ) {
        taskList.style.border = "1px solid #ddd";
    }

    else {
        taskList.style.border = "none";
    }


    tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.className = "task-item";

        taskItem.innerHTML = `<span><span class="task-number">${index + 1}.</span> ${task}</span>`;

        const deleteTaskButton = document.createElement("img");
        deleteTaskButton.src = "./assets/delete-button1.svg";
        deleteTaskButton.alt = "Delete button";
        deleteTaskButton.className = "delete-task";

        deleteTaskButton.addEventListener("mouseenter", () => {
            deleteTaskButton.src = "./assets/delete-button1-hover.svg";
        });

        deleteTaskButton.addEventListener("mouseleave", () => {
            deleteTaskButton.src = "./assets/delete-button1.svg";
        });

        deleteTaskButton.addEventListener("click", () => deleteTask(index));

        taskItem.appendChild(deleteTaskButton);
        taskList.appendChild(taskItem);

    
    });
}

deleteButton.addEventListener("mouseenter", () => {
    deleteButton.src = "./assets/delete-button1-hover.svg";
});

deleteButton.addEventListener("mouseleave", () => {
    deleteButton.src = "./assets/delete-button1.svg";
});

// function addTask() {
//     const task = taskInput.value;
//     if (task !== "") {
//         tasks = [...tasks, task];
//         const newTaskElement = document.createElement("li");
//         newTaskElement.textContent = task;
//         taskList.appendChild(newTaskElement);
//     }
// }

function addTask() {
    const task = taskInput.value.trim();

    if (task) {
        tasks.push(task);
        taskInput.value = "";
        renderTasks();
    }

    inputContainer.style.display = 'none';
}

function plusTask() {
    inputContainer.style.display = 'flex';
}

window.deleteTask = function(index) {
    tasks.splice(index, 1);
    renderTasks();
};

let isSortedAsc = true;

function updateSortIcon() {
    if (isSortedAsc) {
        sortIcon.src = './assets/sorting-image1.svg';
    } else {
        sortIcon.src = './assets/sorting-image2.svg';
    }
}

sortIcon.addEventListener("mouseenter", () => {
    if (isSortedAsc) {
        sortIcon.src = './assets/sorting-image1-hover.svg';
    } else {
        sortIcon.src = './assets/sorting-image2-hover.svg';
    }
});

sortIcon.addEventListener("mouseleave", () => {
    updateSortIcon();
});


function sortTasks() {
    if (isSortedAsc) {
        tasks.sort(); 
    } else {
        tasks.sort().reverse(); 
    }
    renderTasks();
}

function updateSortIcon() {
    if (isSortedAsc) {
        sortIcon.src = './assets/sorting-image1.svg';
    } else {
        sortIcon.src = './assets/sorting-image2.svg';
    }
}

sortIcon.addEventListener("click", () => {
    isSortedAsc = !isSortedAsc; 
    sortTasks(); 
    updateSortIcon(); 
});

addButton.addEventListener("click", addTask);
plusButton.addEventListener("click", plusTask);
// sortIcon.addEventListener("click", sortTasks);