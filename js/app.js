const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const tasksContainer = document.getElementById("tasksContainer");


addTaskBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;

    checkbox.addEventListener("change", function () {

        taskTextElement.style.textDecoration = checkbox.checked
            ? "line-through"
            : "none";
    });

    taskElement.appendChild(checkbox);
    taskElement.appendChild(taskTextElement);

    tasksContainer.appendChild(taskElement);

    taskInput.value = "";
});