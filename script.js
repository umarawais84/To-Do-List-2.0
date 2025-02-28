// Initialize tasks array from localStorage or as an empty array
let tasks = localStorage.getItem("tasks") ? localStorage.getItem("tasks").split(",") : [];

// Display tasks on page load
displayTasks();

// Add event listener to add tasks when the button is clicked
document.getElementById("addTaskBtn").addEventListener("click", addTask);

// Add event listener to allow adding tasks by pressing Enter
document.getElementById("taskInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Function to add a new task
function addTask() {
    let taskInput = document.getElementById("taskInput").value.trim();

    if (taskInput) {
        tasks.push(taskInput); // Add task to array
        document.getElementById("taskInput").value = ""; // Clear input

        saveTasks();
        displayTasks();
    }
}

// Function to display tasks
function displayTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

        li.innerHTML = `
            ${task}
            <div>
                <button class='btn btn-success btn-sm me-2' onclick='highlightTask(${index}, this)'>√</button>
                <button class='btn btn-danger btn-sm' onclick='removeTask(${index})'>X</button>
            </div>
        `;

        taskList.appendChild(li);
    });

    updateTaskCounter();
}

// Function to highlight task background in green
function highlightTask(index, button) {
    let li = button.closest("li");
    if (li.style.backgroundColor === "lightgreen") {
        li.style.backgroundColor = "";
    } else {
        li.style.backgroundColor = "lightgreen";
    }
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1); // Remove task from array
    saveTasks();
    displayTasks();
}

// Function to update task counter
function updateTaskCounter() {
    document.getElementById("taskCounter").innerText = `Total Tasks: ${tasks.length}`;
}

// Function to save tasks to localStorage
function saveTasks() {
    // Save tasks as a comma-separated string
    localStorage.setItem("tasks", tasks.join(","));
}

// Clear all tasks when the "Clear All Tasks" button is clicked
document.getElementById("clearTaskBtn").addEventListener("click", function () {
    tasks = [];
    saveTasks();
    displayTasks();
});
