document.addEventListener("DOMContentLoaded", () => {
  const saveBtn = document.getElementById("save-btn");
  const yearSelect = document.getElementById("year");
  const monthSelect = document.getElementById("month");
  const dayInput = document.getElementById("day");
  const taskTypeSelect = document.getElementById("task-type");
  const taskDescInput = document.getElementById("task-desc");
  const container = document.querySelector(".container");
  const tasks = [];

  saveBtn.addEventListener("click", () => {
    const year = yearSelect.value;
    const month = monthSelect.value;
    const day = dayInput.value;
    const taskType = taskTypeSelect.value;
    const taskDesc = taskDescInput.value;

    if (year && month && day && taskType && taskDesc) {
      const task = {
        year,
        month,
        day,
        type: taskType,
        description: taskDesc,
      };

      tasks.push(task);
      displayTasks();
      clearForm();
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });

  function clearForm() {
    yearSelect.value = "";
    monthSelect.value = "";
    dayInput.value = "";
    taskTypeSelect.value = "";
    taskDescInput.value = "";
  }

  function displayTasks() {
    let taskList = document.getElementById("task-list");
    if (!taskList) {
      taskList = document.createElement("ul");
      taskList.id = "task-list";
      container.insertAdjacentElement("afterend", taskList);
    }
    taskList.innerHTML = "";
    tasks.forEach((task) => {
      const taskItem = document.createElement("li");
      taskItem.textContent = `${task.day}/${task.month}/${task.year} - ${task.type}: ${task.description}`;
      taskList.appendChild(taskItem);
    });
  }
});
