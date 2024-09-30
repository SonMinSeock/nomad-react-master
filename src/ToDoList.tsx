import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  id: number;
  category: "To_DO" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = (data: IForm) => {
    setToDos((prev) => [{ id: Date.now(), text: data.toDo, category: "To_DO" }, ...prev]);
    setValue("toDo", "");
  };

  console.log(toDos);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input {...register("toDo")} placeholder="Write a to do" />
        <button>add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
