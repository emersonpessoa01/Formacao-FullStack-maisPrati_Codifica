/* Banco de dados */
class Database {
  //Para identificar as tasks pelo ID
  constructor() {
    this.initDatabase();
  }

  initDatabase() {
    //Capturar o elemento do localstrorage
    const id = localStorage.getItem("id");

    if (id === null) {
      //Se não existir id,criar um id e inicia o id com 0
      localStorage.setItem("id", 0);
      //Irá criar o id toda vez que instaciar o database
    }
  }

  //Para carregar os dados
  loadTasks() {
    //Carregando dados no localstorage
    let tasks = [];
    let id = localStorage.getItem("id");
    //faça um for
    for (let i = 1; i <= id; i++) {
      try {
        tasks.push(JSON.parse(localStorage.getItem(i.toString())));
      } catch (error) {
        console.error(`Erro ao carregar a tarefa com id ${id}`);
      }
    }
    return tasks;

    // let tasks = [];
    // let id = localStorage.getItem("id");
    // while (localStorage.getItem(id) !== null) {
    //   tasks.push(JSON.parse(localStorage.getItem(id)));
    //   id = this.getNextId();
    // }
    // return tasks;
  }

  //Para criar dados
  createTask(task) {
    //A task são instaciadas dentro de registerTask()
    let id = this.getNextId();
    //Salvar dados
    localStorage.setItem(id, JSON.stringify(task));
    localStorage.setItem("id", id.toString());
  }

  //Para deletar dados
  removeTask(id) {
    localStorage.removeItem(id);
  }

  //Para pesquisar as tarefas
  searchTasks(searchTask) {}

  //Para editar dados
  updateTask(id, updatedTask) {}

  //Para pegar o próximo id
  getNextId() {
    let currentId = localStorage.getItem("id");
    return parseInt(currentId) + 1;
  }
}
//Deixar a Task global para ser chamada
//em qualquer lugar
const database = new Database();

//Função para registrar as tasks
function registerTask() {
  let year = document.getElementById("year").value;
  let mounth = document.getElementById("mounth").value;
  let day = document.getElementById("day").value;
  let type = document.getElementById("type").value;
  let description = document.getElementById("description").value;

  //Instancia a task
  let task = new Task(year, mounth, day, type, description);

  //Validar os dados
  if (task.validateData()) {
    database.createTask(task);
    alert("Tarefa registrada com sucesso!");
  } else {
    alert("Todos os campos são obrigatórios!");
  }
}

//Função para mostrar na tela as tasks

function loadTasks(tasks = database.loadTasks()) {
  // let tasks = database.loadTasks();

  let listTasks = document.getElementById("listTasks");

  listTasks.innerHTML = "";

  tasks.forEach(({ id, year, mounth, day, type, description }) => {
    let row = listTasks.insertRow();
    row.insertCell(0).innerHTML = `${day.toString().padStart(2, "0")}/${mounth.toString().padStart(2, "0")}/${year}`;
    row.insertCell(1).innerHTML = getTaskTypeName(type);
    row.insertCell(2).innerHTML = description;

    //criar um botão
    let btn = document.createElement("button");
    btn.className = "btn btn-danger";
    btn.id = id;
    btn.innerHTML = "Remover";

    btn.onClick = () => {
      if (confirm("Você tem certeza que quer excluir esta tarefa?")) {
        database.removeTask(id);
        loadTasks();
      }
    };
    row.insertCell(3).appendChild(btn);
  });
}

//Função para pegar o nome do tipo da tarefa

function getTaskTypeName(type) {
  switch (type) {
    case "1":
      return "Studies";
      break;
    case "2":
      return "Work";
      break;
    case "3":
      return "Home";
      break;
    case "4":
      return "Health";
      break;
    case "5":
      return "Family";
      break;
    default:
  }
}

//Função para carregar as tasks ao iniciar

window.onload = () => {
  if (document.body.contains(document.getElementById("listTasks"))) {
    loadTasks();
  }
};

//Entidade(representação de um conjunto de informações, que representa um objeto do mundo real) Databas

//Entidade(representação de um conjunto de informações, que representa um objeto do mundo real) Task

class Task {
  constructor(year, mounth, day, type, description) {
    this.year = year;
    this.mounth = mounth;
    this.day = day;
    this.type = type;
    this.description = description;
  }

  //Validar os dados
  validateData() {
    //Validar os dados
    for (let key in this) {
      if (this[key] === undefined || this[key] === "") {
        console.error(`O campo ${key} é obrigatório`);
        return false;
      }
      return true;
    }
  }
}
