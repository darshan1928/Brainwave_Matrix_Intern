let addBtn = document.getElementById("add-btn-click");
const todoList = [];
let todoData = document.getElementById("todo-input");
const taskContainer = document.querySelector(".task-container");
let editIndex = null;

addBtn.addEventListener("click", () => {
  const task = todoData.value.trim();
  if (task) {
    if (editIndex === null) {
      todoList.push(task);
    } else {
      todoList[editIndex] = task;
      editIndex = null;
      addBtn.textContent = "ADD";
    }
    todoData.value = ""; // Clear the input field
    renderTasks(); // Call a function to render the tasks
  }
});

function renderTasks() {
  taskContainer.innerHTML = ""; // Clear the existing tasks

  todoList.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const taskContent = document.createElement("h4");
    taskContent.textContent = task;
    taskDiv.appendChild(taskContent);

    const taskUpdateDiv = document.createElement("div");
    taskUpdateDiv.classList.add("task-update");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("update-btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      deleteTask(index);
    });

    const editBtn = document.createElement("button");
    editBtn.classList.add("update-btn");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      editTask(index);
    });

    taskUpdateDiv.appendChild(deleteBtn);
    taskUpdateDiv.appendChild(editBtn);

    taskDiv.appendChild(taskUpdateDiv);
    taskContainer.appendChild(taskDiv);
  });
}

function deleteTask(index) {
  todoList.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  todoData.value = todoList[index];
  editIndex = index;
  addBtn.textContent = "Update";
}
