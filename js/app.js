const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const tasksContainer = document.getElementById("tasksContainer");


addTaskBtn.addEventListener("click", function () {

    const taskText = taskInput.value;

    if (taskText === "") {
        return;
    }

    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;

    taskElement.appendChild(taskTextElement);
    tasksContainer.appendChild(taskElement);

    taskInput.value = "";
});