import { useState } from "react";

function Form() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const handleInputChange = (event) => {
    setNovaTarefa(event.target.value);
  };

  const handleAddTask = () => {
    if (novaTarefa.trim() === "") {
      return;
    }

    setTarefas([...tarefas, { texto: novaTarefa, concluida: false }]);
    setNovaTarefa("");
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = tarefas.filter((_, i) => i !== index);
    setTarefas(updatedTasks);
  };

  const handleCompleteTask = (index) => {
    const updatedTasks = tarefas.map((tarefa, i) =>
      i === index
        ? {
            ...tarefa,
            concluida: !tarefa.concluida,
          }
        : tarefa
    );
    setTarefas(updatedTasks);
  };

  const handleClearCompletedTasks = () => {
    const remainingTasks = tarefas.filter((tarefa) => !tarefa.concluida);
    setTarefas(remainingTasks);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input type="text" value={novaTarefa} onChange={handleInputChange} placeholder="Digite uma nova tarefa" />
      <button onClick={handleAddTask}>Adicionar Tarefa</button>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index} style={{ textDecoration: tarefa.concluida ? "line-through" : "none" }}>
            {tarefa.texto}
            <button onClick={() => handleCompleteTask(index)}>{tarefa.concluida ? "Desmarcar" : "Concluído"}</button>
            <button onClick={() => handleRemoveTask(index)}>Remover</button>
          </li>
        ))}
      </ul>

      <button onClick={handleClearCompletedTasks}>Limpar Tarefas Concluídas</button>
    </div>
  );
}

export default Form;
