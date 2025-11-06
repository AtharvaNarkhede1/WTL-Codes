let tasks = JSON.parse(localStorage.getItem('tasks')) || [];  // Load saved tasks

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        const taskText = document.createElement("span");
        taskText.textContent = `${task.text} (${task.priority})`;
        if (task.completed) {
            taskText.classList.add("completed");
        }

        const actions = document.createElement("div");

        const completeBtn = document.createElement("button");
        completeBtn.className = "btn btn-sm btn-success me-2";
        completeBtn.innerHTML = '<i class="bi bi-check-lg"></i>';
        completeBtn.onclick = () => toggleComplete(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-sm btn-danger";
        deleteBtn.innerHTML = '<i class="bi bi-trash"></i>';
        deleteBtn.onclick = () => deleteTask(index);

        actions.appendChild(completeBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(taskText);
        li.appendChild(actions);

        taskList.appendChild(li);
    });
}

function addtasks() {
    const taskText = document.getElementById("taskInput").value.trim();  // Fixed: `ariaValueMax` → `value`
    const priority = document.getElementById("priorityselect").value;
    const category = document.getElementById("categoryselect").value;
    const status = document.getElementById("statusselect").value;
    const dueDate = document.getElementById("dateInput").value;

    if (!taskText) return;

    const task = {
        text: taskText,
        priority: priority,
        category: category,
        status: status,
        dueDate: dueDate,
        completed: false
    };

    tasks.push(task);
    saveTasks();
    renderTasks();

    document.getElementById("taskInput").value = "";

    // Notifin section
    const note = document.getElementById("notification");
    note.classList.remove("d-none");
    note.classList.add("show");
    setTimeout(() => note.classList.add("d-none"), 3000);
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function clearAll() {
    tasks = [];
    saveTasks();
    renderTasks();
}

function clearCompleted() {
    tasks = tasks.filter(tasks => !tasks.completed);
    saveTasks();
    renderTasks();
}

document.getElementById("addTaskBtn").addEventListener("click", addtasks);
window.onload = renderTasks;
