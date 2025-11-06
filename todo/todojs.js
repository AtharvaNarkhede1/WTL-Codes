let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTasks() {
    const taskText = document.querySelector('input[type="text"]').value.trim();
    const priority = document.getElementById("priority").value;
    const category = document.getElementById("category").value;
    const status = document.getElementById("status").value;
    const dueDate = document.getElementById("date").value;

    if (!taskText) return;

    const task = {
        text: taskText,
        priority: priority,
        category: category,
        status: status,
        dueDate: dueDate,
        completed: false,
    };

    tasks.push(task);
    saveTasks();
    getdata();

    // clear input
    document.querySelector('input[type="text"]').value = "";
}

function clearall() {
    tasks = [];
    saveTasks();
    getdata();
}

function clearcompleted() {
    tasks = tasks.filter((task) => !task.completed);
    saveTasks();
    getdata();
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    getdata();
}

function getdata() {
    const table = document.querySelector(".tablecontainer table");
    // clear old rows except header
    table.innerHTML = `
        <tr>
            <th>Task Name</th>
            <th>Priority</th>
            <th>Category</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
        </tr>
    `;

    tasks.forEach((task, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${task.text}</td>
            <td>${task.priority}</td>
            <td>${task.category}</td>
            <td>${task.status}</td>
            <td>${task.dueDate}</td>
            <td>
                <button class="btn btn-sm" onclick="toggleComplete(${index})">
                    ${task.completed ? "Undo" : "Complete"}
                </button>
            </td>
        `;

        table.appendChild(row);
    });
}

// event binding
document.getElementById("addtaskbtn").addEventListener("click", addTasks);
window.onload = getdata;
