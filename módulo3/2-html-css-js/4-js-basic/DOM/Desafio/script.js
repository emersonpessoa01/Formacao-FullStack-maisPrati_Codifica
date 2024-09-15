let title = document.getElementById("title");
let buttonAddItem = document.getElementById("buttonAddItem");
let buttonDeleteItem = document.getElementById("buttonDeleteItem");
let list = document.getElementById("list");
buttonReset = document.getElementById("buttonReset");

function addItem() {
  let newItem = document.createElement("li");
  newItem.innerHTML = `Item ${list.children.length + 1}`;

  list.appendChild(newItem);

  title.innerHTML = "Novo item adicionado!";

  title.style.color = "green";
}

function removeItem() {
  if (list.children.length > 0) {
    list.removeChild(list.lastElementChild);

    title.innerHTML = "Item removido!";

    title.style.color = "red";
  } else {
    title.innerHTML = "Nenhum item para remover!";
    setTimeout(() => {
      title.innerHTML = "Bem-vindo ao Manipulador de DOM";
    }, 1000);
    title.style.color = "black";
  }
}
function reset(event) {
  event.preventDefault();
  location.reload();
}
buttonAddItem.addEventListener("click", addItem);
buttonDeleteItem.addEventListener("click", removeItem);
buttonReset.addEventListener("click", reset);
