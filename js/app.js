const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const tasksContainer = document.getElementById("tasksContainer");

const allBtn = document.getElementById("allBtn");
const activeBtn = document.getElementById("activeBtn");
const completedBtn = document.getElementById("completedBtn");

const tasks = [];


function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function createTask(task) {

    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = task.title;

    if (task.completed) {
        taskTextElement.style.textDecoration = "line-through";
    }


    checkbox.addEventListener("change", function () {

        task.completed = checkbox.checked;

        taskTextElement.style.textDecoration = task.completed
            ? "line-through"
            : "none";

        saveTasks();
    });


    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", function () {

        const newTitle = prompt("Edit task:", task.title);

        if (newTitle === null) {
            return;
        }

        const updatedTitle = newTitle.trim();

        if (updatedTitle === "") {
            return;
        }

        task.title = updatedTitle;

        taskTextElement.textContent = task.title;

        saveTasks();
    });


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {

        const taskIndex = tasks.findIndex(function (item) {
            return item.id === task.id;
        });

        tasks.splice(taskIndex, 1);

        taskElement.remove();

        saveTasks();

        console.log(tasks);
    });


    taskElement.appendChild(checkbox);
    taskElement.appendChild(taskTextElement);
    taskElement.appendChild(editBtn);
    taskElement.appendChild(deleteBtn);

    tasksContainer.appendChild(taskElement);
}


function renderTasks(taskList) {

    tasksContainer.innerHTML = "";

    taskList.forEach(function (task) {

        createTask(task);

    });

}


const savedTasks = localStorage.getItem("tasks");

if (savedTasks !== null) {

    const loadedTasks = JSON.parse(savedTasks);

    loadedTasks.forEach(function (task) {

        tasks.push(task);
        createTask(task);

    });

}


addTaskBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const newTask = {
        id: Date.now(),
        title: taskText,
        completed: false
    };

    tasks.push(newTask);

    console.log(tasks);

    createTask(newTask);

    saveTasks();

    taskInput.value = "";
});


taskInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        addTaskBtn.click();
    }

});


allBtn.addEventListener("click", function () {

    renderTasks(tasks);

});


activeBtn.addEventListener("click", function () {

    const activeTasks = tasks.filter(function (task) {

        return task.completed === false;

    });

    renderTasks(activeTasks);

});


completedBtn.addEventListener("click", function () {

    const completedTasks = tasks.filter(function (task) {

        return task.completed === true;

    });

    renderTasks(completedTasks);

});