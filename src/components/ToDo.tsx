import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, category: name as any, id };

      // 기존 배열에 해당 요소 변경 splice 하는 방법
      const newToDos = [...oldToDos];
      newToDos.splice(targetIndex, 1, newToDo);

      //return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
      return newToDos;
    });
  };

  const onDelete = () => {
    setToDos((oldToDos) => {
      // const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);

      // const newToDos = [...oldToDos];
      // newToDos.splice(targetIndex, 1);

      // return newToDos;
      const newToDos = oldToDos.filter((toDo) => toDo.id !== id);
      return newToDos;
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
      <button onClick={onDelete}>❌</button>
    </li>
  );
}

export default ToDo;
