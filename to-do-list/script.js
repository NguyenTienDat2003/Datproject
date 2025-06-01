function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Xoá";
  deleteBtn.onclick = () => li.remove();

  const editBtn = document.createElement("button");
  editBtn.textContent = "Sửa";
  editBtn.onclick = () => startEdit(span, editBtn);

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
  input.focus();
}

document
  .getElementById("taskInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

function startEdit(span, editBtn) {
  const currentText = span.textContent;
  const input = document.createElement("input");
  input.type = "text";
  input.value = currentText;
  input.style.flex = "1";

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      span.textContent = input.value.trim() || currentText;
      span.style.display = "inline";
      input.remove();
      editBtn.style.display = "inline";
    }
  });

  span.style.display = "none";
  span.parentNode.insertBefore(input, span);
  input.focus();
  editBtn.style.display = "none";
}
