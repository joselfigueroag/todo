import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "../styles/Form.css";

function Form(props) {
  let [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskNew = {
      id: uuidv4(),
      text: text,
      completed: false,
    };

    props.onSubmit(taskNew)
  };

  return (
    <>
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="task-input"
          placeholder="Escribe una tarea"
          name="text"
          onChange={handleChange}
        />
        <button className="task-button">Agregar tarea</button>
      </form>
    </>
  );
}

export default Form;
