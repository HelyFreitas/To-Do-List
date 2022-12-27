import { useState } from "react";

import "./styles.css";

export const TodoList = () => {
  const [remove, setRemove] = useState(false);
  const [valueInput, setValueInput] = useState("");

  function handleOnChange(e) {
    setValueInput(e.target.value);
  }

  function handleClickButton(e)  {
    
  }

  return (
    <div className="container-todo">
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        value={valueInput}
        onChange={handleOnChange}
      />
      <button onClick={handleClickButton}>Adicionar</button>
    </div>
  );
};
