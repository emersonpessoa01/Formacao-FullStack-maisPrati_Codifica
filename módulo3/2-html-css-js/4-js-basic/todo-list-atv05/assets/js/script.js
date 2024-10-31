class TodoApp {
  constructor() {
    //define propriedades e métodos para configurar o aplicativo de tarefas, carregando a lista inicial e configurando eventos para permitir que o usuário adicione novas tarefas.
    this.todos = [];
    this.todoForm = document.getElementById("todoForm");
    this.todoInput = document.getElementById("todoInput");
    this.todoList = document.getElementById("todoList");

    this.loadTodos();
    this.setupEventListeners();
  }
  //Configura um ouvinte para o evento de envio do formulário (submit). Quando o formulário é enviado, ele impede o recarregamento da página com e.preventDefault() e chama o método addTodo() para adicionar uma nova tarefa à lista de maneira dinâmica.
  setupEventListeners() {
    this.todoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addTodo();
    });
  }

  //Carrega as tarefas previamente salvas no localStorage, atualiza a lista todos da classe e exibe essas tarefas na interface se alguma estiver armazenada.
  loadTodos() {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
      this.renderTodos();
    }
  }

  //Armazena a lista de tarefas em localStorage, garantindo que ela fique salva mesmo após o usuário fechar o navegador.
  saveTodos() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  // Cria uma nova tarefa a partir do valor de entrada, adiciona-a à lista todos, salva a lista atualizada no localStorage, exibe a tarefa e limpa o campo de entrada.
  addTodo() {
    const text = this.todoInput.value.trim();
    if (text) {
      const todo = {
        id: Date.now(),
        text,
        completed: false,
      };
      this.todos.push(todo);
      this.saveTodos();
      this.renderTodos();
      this.todoInput.value = "";
    }
  }

  //Removendo uma tarefa específica da lista todos, salvando a lista modificada no localStorage e atualizando a exibição na página.
  //todo.id !== id: A condição que você está usando dentro do filter() verifica se o id do todo é diferente do id que você deseja remover.
  //Se retornar true (ou seja, o todo.id é diferente do id passado), o item será mantido no novo array.
  //Se retornar false (ou seja, o todo.id é igual ao id passado), o item será removido do novo array.

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.saveTodos();
    this.renderTodos();
  }

  //O método toggleTodo(id) tem a finalidade de alternar o estado de conclusão (completed) de uma tarefa específica. Ele faz isso:
  // Percorrendo a lista de tarefas (this.todos) e verificando se o id de cada tarefa corresponde ao id fornecido.
  // Se a tarefa correspondente for encontrada, ele alterna seu estado de conclusão.
  // O método então atualiza o armazenamento local com a nova lista de tarefas e re-renderiza a interface para refletir a alteração.
  toggleTodo(id) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    this.saveTodos();
    this.renderTodos();
  }

  //tem a finalidade de editar o texto de uma tarefa específica. Ele faz isso:
  // Encontrando a tarefa correspondente ao id fornecido.
  // Exibindo um prompt para que o usuário insira um novo texto.
  // Se um novo texto for fornecido (e não for cancelado), ele atualiza o texto da tarefa correspondente.
  // O método, então, atualiza o armazenamento local com a nova lista de tarefas e re-renderiza a interface para refletir a alteração.
  editTodo(id) {
    const todo = this.todos.find((t) => t.id === id);
    const newText = prompt("Editar tarefa:", todo.text);
    if (newText !== null) {
      this.todos = this.todos.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            text: newText.trim(),
          };
        }
        return t;
      });
      this.saveTodos();
      this.renderTodos();
    }
  }
  //é responsável por gerar e exibir a lista de tarefas (todos) na interface do usuário. Ele realiza as seguintes ações:
  // Limpa a lista atual de tarefas para evitar duplicações.
  // Para cada tarefa em this.todos, cria um item de lista (<li>) contendo:
  // Um checkbox que indica se a tarefa está concluída.
  // Um texto representando a tarefa.
  // Botões para editar e excluir a tarefa, cada um com ícones.
  // Adiciona todos os elementos criados ao DOM, permitindo que o usuário interaja com a lista de tarefas de forma visual.
  renderTodos() {
    this.todoList.innerHTML = "";
    this.todos.forEach((todo) => {
      const li = document.createElement("li");
      li.className = "flex items-center justify-between p-3 bg-gray-50 rounded shadow-sm hover:shadow-lg transition-shadow duration-200";

      const leftSection = document.createElement("div");
      leftSection.className = "flex items-center gap-3";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;
      checkbox.className = "w-5 h-5 text-blue-500";
      checkbox.addEventListener("change", () => this.toggleTodo(todo.id));

      const text = document.createElement("span");
      text.textContent = todo.text;
      text.className = todo.completed ? "line-through text-gray-500 capitalize" : "text-gray-800 capitalize";

      leftSection.appendChild(checkbox);
      leftSection.appendChild(text);

      const buttons = document.createElement("div");
      buttons.className = "flex gap-2";

      const editButton = document.createElement("button");
      editButton.className = "text-gray-600 hover:text-blue-500 transition duration-400";
      editButton.innerHTML = '<i class="fas fa-edit"></i>';
      editButton.addEventListener("click", () => this.editTodo(todo.id));

      const deleteButton = document.createElement("button");
      deleteButton.className = "text-gray-600 hover:text-red-500 transition duration-400";
      deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
      deleteButton.addEventListener("click", () => this.deleteTodo(todo.id));

      buttons.appendChild(editButton);
      buttons.appendChild(deleteButton);

      li.appendChild(leftSection);
      li.appendChild(buttons);

      this.todoList.appendChild(li);
    });
  }
}

// Inicializar o app
const todoApp = new TodoApp();
