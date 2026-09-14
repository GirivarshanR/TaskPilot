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


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        taskElement.remove();
    });


    taskElement.appendChild(checkbox);
    taskElement.appendChild(taskTextElement);
    taskElement.appendChild(deleteBtn);

    tasksContainer.appendChild(taskElement);

    taskInput.value = "";
});