function addTask() {
  const input = document.querySelector("#task");

  const taskText = input.value.trim();
  if (taskText) {
    document
      .querySelector("#task-list")
      createElementTask(taskText, false));
  }
}

function createElementTask(taskText, isCompleted) {
  const textDecoration = isCompleted ? "line-through" : "none";
  const span = document.createElement("span");
  span.textContent = taskText;
  const li = document.createElement("li");
  li.appendChild(span);
}
