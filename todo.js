function addTask() {
  const input = document.querySelector("#task");
  const taskText = input.value.trim();
  if (taskText) {
    const taskList = document.querySelector("#task-list");
    const taskItem = createElementTask(taskText, false);
    taskList.appendChild(taskItem);
    input.value = "";
  }
}

function createElementTask(taskText, isCompleted) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.style.textDecoration = isCompleted ? "line-through" : "none";
  span.textContent = taskText;
  li.appendChild(span);

  const removeButton = document.createElement("button");
  removeButton.textContent = "Usuń";
  removeButton.addEventListener("click", function () {
    li.remove();
  });

  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Wykonane";
  toggleButton.addEventListener("click", function () {
    if (span.style.textDecoration === "line-through") {
      span.style.textDecoration = "none";
    } else {
      span.style.textDecoration = "line-through";
    }
  });

  li.appendChild(removeButton);
  li.appendChild(toggleButton);

  return li;
}
