const addBtn = document.getElementById("add-btn");
const editBtn = document.getElementById("edit-btn");
const deleteBtn = document.getElementById("delete-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

let selectedTask = null;

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    if (selectedTask) selectedTask.classList.remove("selected");
    selectedTask = li;
    li.classList.add("selected");
    taskInput.value = li.firstChild.textContent;
    editBtn.disabled = false;
    deleteBtn.disabled = false;
  });

  taskList.appendChild(li);
  taskInput.value = "";
  clearSelection();
});

editBtn.addEventListener("click", () => {
  if (selectedTask) {
    const newText = taskInput.value.trim();
    if (newText !== "") {
      selectedTask.textContent = newText;
      selectedTask.classList.remove("selected");
      taskInput.value = "";
      clearSelection();
    }
  }
});

deleteBtn.addEventListener("click", () => {
  if (selectedTask) {
    selectedTask.remove();
    taskInput.value = "";
    clearSelection();
  }
});

function clearSelection() {
  if (selectedTask) {
    selectedTask.classList.remove("selected");
    selectedTask = null;
  }
  editBtn.disabled = true;
  deleteBtn.disabled = true;
}
