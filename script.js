// Initialize an array to store tasks
let tasks = [];

// Add event listener to add tasks when the button is clicked
document.getElementById("addTaskBtn").addEventListener("click", function () {
    // Get the text value from the input box
    let taskInput = document.getElementById("taskInput").value;

    // Check if the input field is not empty
    if (taskInput) {
        tasks.push(taskInput); // Add the task to the array

        // Clear the input field after adding the task
        document.getElementById("taskInput").value = "";

        displayTasks(); // Update the displayed task list
    }
});

function displayTasks() {
    // Select the unordered list (taskList) in the HTML
    let taskList = document.getElementById("taskList");

    // Clear the existing task list before updating it
    taskList.innerHTML = "";

    // Loop through each task in the array and create a list item
    tasks.forEach((task, index) => {
        // Create a new <li> element for each task
        let li = document.createElement("li");

        // Add Bootstrap classes for styling
        li.classList.add(
            "list-group-item",
            "d-flex",
            "justify-content-between",
            "align-items-center"
        );

        // Set the inner HTML of the <li> element with task text, a highlight button, and a delete button
        li.innerHTML = `
            ${task} 
            <div>
                <button class='btn btn-success btn-sm me-2' onclick='highlightTask(this)'> √ </button>
                <button class='btn btn-danger btn-sm' onclick='removeTask(${index})'> X </button>
            </div>
        `;

        // Append the task to the list
        taskList.appendChild(li);
    });
}

// Function to highlight task background in green
function highlightTask(button) {
    button.closest("li").style.backgroundColor = "lightgreen";
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Clear all tasks when the "Clear All Tasks" button is clicked
document.getElementById("clearTaskBtn").addEventListener("click", function () {
    tasks = [];
    displayTasks();
});
