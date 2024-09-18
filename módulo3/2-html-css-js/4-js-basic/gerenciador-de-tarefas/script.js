// Array para armazenar as tarefas
let tasks = [];

// Referência aos elementos
let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");
let showAllBtn = document.getElementById("showAll");
let showCompletedBtn = document.getElementById("showCompleted");
let showIncompletedBtn = document.getElementById("showIncompleted");
let errorEmptyContainer = document.getElementById("error-empty");

// Função para renderizar a lista de tarefas
function renderTasks(filter = "all") {
  // Limpa a lista de tarefas atual
  taskList.innerHTML = "";

  // Filtra as tarefas conforme o filtro selecionado
  //(todas, concluídas ou não concluídas)
  const filteredTasks = tasks.filter((task) => {
    console.log(task);
    if (filter === "completed") {
      return task.completed;
    }
    if (filter === "incompleted") {
      return !task.completed;
    }
    return true;
  });

  // Exibe ou oculta a lista de tarefas dependendo da quantidade de tarefas
  if (filteredTasks.length === 0) {
    taskList.style.display = "none"; // Oculta a lista se não houver tarefas
  } else {
    taskList.style.display = "flex"; // Exibe a lista se houver tarefas
    
  }
  // Renderiza as tarefas filtradas
  filteredTasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span class="${task.completed ? "completed" : ""}">${task.name}</span>
        <div class="container-btn">
          <button class="btn btn-remove" onclick="removeTask(${index})">Remover</button>
          <button class="btn btn-edit" onclick="editTask(${index})">Editar</button>
          <button class="btn btn-completed" onclick="toggleComplete(${index})">${
      task.completed ? "Desmarcar" : "Concluir"
    }</button>
    </div>
    `;
    taskList.appendChild(taskItem);
  });
}

// Função para adicionar uma nova tarefa

addTaskBtn.addEventListener("click", () => {
  const taskName = taskInput.value.trim();

  // if (!taskName) {
  //   alert("Por favor, digite uma tarefa válida.");
  //   return;
  // }
  if (taskName) {
    tasks.push({
      name: taskName,
      completed: false,
    });
    taskInput.value = "";
    taskInput.focus();
    renderTasks();
  }
  if (taskName === "") {
    showErrorEmpty();
    taskInput.focus();
    return;
  } else {
    errorEmptyContainer.classList.add("hide");
    renderTasks();
  }
});

//Função para adicionar tarefa ao pressionar Enter

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTaskBtn.click();
  }
});

//Função para remover uma tarefa
function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Função para editar uma tarefa
function editTask(index) {
  const newTaskName = prompt("Editar tarefa", tasks[index].name);
  if (newTaskName) {
    tasks[index].name = newTaskName.trim();
    renderTasks();
  }
}

// Função para marcar/desmarcar uma tarefa como concluída
function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Funções para mostrar/esconder a caixa de erro
const showErrorEmpty = () => {
  errorEmptyContainer.classList.remove("hide");
};
//Filtros de exibição

showAllBtn.addEventListener("click", () => renderTasks("all"));
showCompletedBtn.addEventListener("click", () => renderTasks("completed"));
showIncompletedBtn.addEventListener("click", () => renderTasks("incompleted"));

// Renderiza as tarefas inicialmente(sem filtro)

renderTasks();
