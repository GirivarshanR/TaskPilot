const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const tasksContainer = document.getElementById("tasksContainer");

const tasks = [];


function createTask(task) {

    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = task.title;

    checkbox.addEventListener("change", function () {

        task.completed = checkbox.checked;

        taskTextElement.style.textDecoration = task.completed
            ? "line-through"
            : "none";
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


});

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {

        const taskIndex = tasks.findIndex(function (item) {
            return item.id === task.id;
        });

        tasks.splice(taskIndex, 1);

        taskElement.remove();

        console.log(tasks);
    });


    taskElement.appendChild(checkbox);
    taskElement.appendChild(taskTextElement);
    taskElement.appendChild(editBtn);
    taskElement.appendChild(deleteBtn);

    tasksContainer.appendChild(taskElement);
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

    taskInput.value = "";
});