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
  loadTasks() {}

  //Para criar dados
  createTask(task) {
    //A task são instaciadas dentro de registerTask()
    let id = this.getNextId();
    //Salvar dados
    localStorage.setItem(id, JSON.stringify(task));
    localStorage.setItem("id", id.toString());
  }

  //Para deletar dados
  removeTask(id) {}

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

  let task = new Task(year, mounth, day, type, description);

  //Validar os dados
  if (task.validateData()) {
    database.createTask(task);
    alert("Tarefa registrada com sucesso!");
  } else {
    alert("Todos os campos são obrigatórios!");
  }
}

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
