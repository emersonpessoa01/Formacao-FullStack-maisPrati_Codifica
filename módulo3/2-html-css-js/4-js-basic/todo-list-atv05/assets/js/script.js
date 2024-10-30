class TodoApp {
  constructor() {
    this.todos = [];
    this.todoForm = document.getElementById("todoForm");
    this.todoInput = document.getElementById("todoInput");
    this.todoList = document.getElementById("todoList");

    this.loadTodos();
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.todoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.addTodo();
    });
  }

  loadTodos() {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
      this.renderTodos();
    }
  }

  saveTodos() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

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

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.saveTodos();
    this.renderTodos();
  }

  toggleTodo(id) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.saveTodos();
    this.renderTodos();
  }

  editTodo(id) {
    const todo = this.todos.find((t) => t.id === id);
    const newText = prompt("Editar tarefa:", todo.text);
    if (newText !== null) {
      this.todos = this.todos.map((t) => {
        if (t.id === id) {
          return { ...t, text: newText.trim() };
        }
        return t;
      });
      this.saveTodos();
      this.renderTodos();
    }
  }

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
      text.className = todo.completed ? "line-through text-gray-500" : "text-gray-800";

      leftSection.appendChild(checkbox);
      leftSection.appendChild(text);

      const buttons = document.createElement("div");
      buttons.className = "flex gap-2";

      const editButton = document.createElement("button");
      editButton.className = "text-gray-600 hover:text-blue-500 transition";
      editButton.innerHTML = '<i class="fas fa-edit"></i>';
      editButton.addEventListener("click", () => this.editTodo(todo.id));

      const deleteButton = document.createElement("button");
      deleteButton.className = "text-gray-600 hover:text-red-500 transition";
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
