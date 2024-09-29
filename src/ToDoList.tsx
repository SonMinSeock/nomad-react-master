import { useState } from "react";

function ToDoList() {
  const [todo, setTodo] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input placeholder="Write a to do" onChange={onChange} value={todo} />
        <button>add</button>
      </form>
    </div>
  );
}

export default ToDoList;
