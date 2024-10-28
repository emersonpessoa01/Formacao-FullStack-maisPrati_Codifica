class Task {
  constructor(year, month, day, type, description) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.type = type;
    this.description = description;
  }

  // Método para validar se todos os campos da tarefa foram preenchidos corretamente
  validateData() {
    for (let key in this) {
      if (this[key] === undefined || this[key] === "") {
        console.error(`O campo ${key} é obrigatório.`);
        return false; // Retorna falso se algum campo estiver vazio ou indefinido
      }
    }
    return true; // Retorna verdadeiro se todos os campos forem válidos
  }
}

class Database {
  constructor() {
    this.initDatabase();
  }

  // Inicializa o banco de dados no localStorage
  initDatabase() {
    const id = localStorage.getItem("id");
    if (id === null) {
      localStorage.setItem("id", "0"); // Inicializa o id no localStorage
    }
  }

  // Carrega todas as tarefas armazenadas no localStorage
  loadTasks() {
    const tasks = [];
    const id = localStorage.getItem("id");

    for (let i = 1; i <= id; i++) {
      try {
        const task = JSON.parse(localStorage.getItem(i));
        if (task !== null) {
          task.id = i; // Adiciona o ID à tarefa para referência
          tasks.push(task);
        }
      } catch (e) {
        console.error(`Erro ao carregar a tarefa com id ${i}:`, e);
      }
    }
    return tasks; // Retorna um array com todas as tarefas
  }

  // Cria uma nova tarefa no banco de dados
  createTask(task) {
    const id = this.getNextId();
    localStorage.setItem(id, JSON.stringify(task));
    localStorage.setItem("id", id.toString());
  }

  // Remove uma tarefa do banco de dados
  removeTask(id) {
    localStorage.removeItem(id);
  }

  // Filtra tarefas com base em critérios fornecidos
  searchTasks(searchTask) {
    const tasks = this.loadTasks();

    return tasks.filter((task) => {
      return (
        (searchTask.year ? task.year === searchTask.year : true) &&
        (searchTask.month ? task.month === searchTask.month : true) &&
        (searchTask.day ? task.day === searchTask.day : true) &&
        (searchTask.type ? task.type === searchTask.type : true) &&
        (searchTask.description ? task.description === searchTask.description : true)
      );
    });
  }

  // Obtém o próximo ID de tarefa disponível
  getNextId() {
    const currentId = localStorage.getItem("id");
    return parseInt(currentId) + 1;
  }
}

const database = new Database();

// Função para registrar uma nova tarefa
function registerTask() {
  const year = document.getElementById("year").value;
  const month = document.getElementById("month").value;
  const day = document.getElementById("day").value;
  const type = document.getElementById("type").value;
  const description = document.getElementById("description").value;

  const task = new Task(year, month, day, type, description);

  if (task.validateData()) {
    database.createTask(task);
    alert("Tarefa registrada com sucesso!");
    resetForm(); // Limpa o formulário após o registro
  } else {
    alert("Por favor preencha todos os campos.");
  }
}

// Função para limpar o formulário após o registro
function resetForm() {
  document.getElementById("year").value = "";
  document.getElementById("month").value = "";
  document.getElementById("day").value = "";
  document.getElementById("type").value = "";
  document.getElementById("description").value = "";
}

// Função para carregar tarefas na lista de tarefas
function loadTasks(tasks = database.loadTasks()) {
  const listTasks = document.getElementById("listTasks");
  listTasks.innerHTML = ""; // Limpa a lista existente

  tasks.forEach(({ id, day, month, year, type, description }) => {
    const row = listTasks.insertRow();

    row.insertCell(0).innerHTML = `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year}`;

    // Converte o tipo de tarefa de número para texto
    row.insertCell(1).innerHTML = getTaskTypeName(type);
    row.insertCell(2).innerHTML = description;

    // Cria e adiciona o botão de deletar
    const btn = document.createElement("button");
    btn.className = "btn btn-danger";
    btn.id = id;
    btn.innerHTML = "Deletar";
    btn.onclick = () => {
      if (confirm("Tem certeza de que deseja excluir esta tarefa?")) {
        database.removeTask(id);
        loadTasks(); // Atualiza a lista de tarefas
      }
    };

    row.insertCell(3).append(btn);
  });
}

// Função auxiliar para obter o nome do tipo de tarefa
function getTaskTypeName(type) {
  switch (type) {
    case "1":
      return "Estudos";
    case "2":
      return "Trabalho";
    case "3":
      return "Casa";
    case "4":
      return "Saúde";
    case "5":
      return "Família";
    default:
      return "Desconhecido";
  }
}

// Função para buscar tarefas com base nos critérios do formulário
function searchTasks() {
  const year = document.getElementById("year").value;
  const month = document.getElementById("month").value;
  const day = document.getElementById("day").value;
  const type = document.getElementById("type").value;
  const description = document.getElementById("description").value;

  let task = new Task(year, month, day, type, description);
  let tasks = database.searchTasks(task);

  loadTasks(tasks); // Carrega as tarefas filtradas
}

// Carrega as tarefas ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  if (document.body.contains(document.getElementById("listTasks"))) {
    loadTasks();
  }
});
