<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do List</title>
  <style>
    body {
      font-family: "Segoe UI", sans-serif;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: #333;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      min-height: 100vh;
    }

    .container {
      background: #fff;
      margin-top: 50px;
      padding: 25px 30px;
      border-radius: 15px;
      box-shadow: 0px 6px 15px rgba(0,0,0,0.15);
      width: 90%;
      max-width: 600px;
      animation: fadeIn 0.6s ease-in-out;
    }

    h1 {
      text-align: center;
      color: #4e54c8;
      margin-bottom: 20px;
    }

    .input-group {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }

    .input-group input {
      flex: 1;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 8px;
      outline: none;
      font-size: 14px;
      transition: border 0.3s;
    }

    .input-group input:focus {
      border-color: #667eea;
    }

    .buttons {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-bottom: 20px;
    }

    button {
      padding: 10px 18px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 14px;
      font-weight: bold;
      transition: transform 0.2s, background 0.3s;
    }

    button:hover {
      transform: scale(1.05);
    }

    #btn {
      background: #667eea;
      color: #fff;
    }

    #btn1 {
      background: #23d5ab;
      color: #fff;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 15px;
    }

    th, td {
      border: 1px solid #ddd;
      padding: 10px;
      text-align: center;
    }

    th {
      background: #667eea;
      color: white;
    }

    tr:nth-child(even) {
      background: #f9f9f9;
    }

    tr:hover {
      background: #f1f1f1;
    }

    .edit-btn {
      background: #ff9800;
      color: #fff;
    }

    .delete-btn {
      background: #f44336;
      color: #fff;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>To-Do List</h1>

    <div class="input-group">
      <input type="text" id="task" placeholder="Enter your task">
      <input type="date" id="date">
    </div>

    <div class="buttons">
      <button type="button" id="btn">Add Task</button>
      <button type="button" id="btn1">Show Tasks</button>
    </div>

    <div id="result"></div>
  </div>
  <script>
  document.getElementById("btn").addEventListener("click", async () => {
    let task = document.getElementById("task").value;
    let date = document.getElementById("date").value;

    let response = await fetch("insert.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ task: task, date: date })
    });

    let data = await response.json();
    document.getElementById("task").value = "";
    document.getElementById("date").value = "";
  });

  // Display tasks
  async function displayTasks() {
    let res = await fetch("display.php");
    let tasks = await res.json();

    let tbl = document.createElement("table");
    tbl.style.border = "1px solid black";
    

    // Header
    let header = document.createElement("tr");
    ["ID", "Task", "Date", "Action1", "Action2"].forEach(h => {
      let th = document.createElement("th");
      th.style.border = "1px solid black";
      th.textContent = h;
      header.appendChild(th);
    });
    tbl.appendChild(header);

    tasks.forEach(task => {
      let row = document.createElement("tr");
      let rowId = task.id;

      // ID
      let td1 = document.createElement("td");
      td1.style.border = "1px solid black";
      td1.textContent = task.id;
      row.appendChild(td1);

      // Task
      let td2 = document.createElement("td");
      td2.style.border = "1px solid black";
      td2.textContent = task.task;
      row.appendChild(td2);

      // Date
      let td3 = document.createElement("td");
      td3.style.border = "1px solid black";
      td3.textContent = task.date;
      row.appendChild(td3);

      // Edit
      let tdEdit = document.createElement("td");
      tdEdit.style.border = "1px solid black";
      let btnEdit = document.createElement("button");
      btnEdit.textContent = "Edit";
      btnEdit.onclick = async function () {
        if (btnEdit.textContent === "Edit") {
          td2.contentEditable = true;
          td3.contentEditable = true;
          btnEdit.textContent = "Save";
        } else {
          td2.contentEditable = false;
          td3.contentEditable = false;
          btnEdit.textContent = "Edit";

          let response = await fetch("update.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: rowId, task: td2.textContent, date: td3.textContent })
          });
          let result = await response.json();
       
        }
      };
      tdEdit.appendChild(btnEdit);
      row.appendChild(tdEdit);

      // Delete
      let tdDel = document.createElement("td");
      tdDel.style.border = "1px solid black";
      let btnDel = document.createElement("button");
      btnDel.textContent = "Delete";
      btnDel.onclick = async function () {
        let response = await fetch("delete.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: rowId })
        });
        let result = await response.json();
        
        row.remove();
      };
      tdDel.appendChild(btnDel);
      row.appendChild(tdDel);

      tbl.appendChild(row);
    });

    let result = document.getElementById("result");
    result.textContent = "";
    result.appendChild(tbl);
  }

  document.getElementById("btn1").addEventListener("click", displayTasks);
</script>

</body>
</html>
