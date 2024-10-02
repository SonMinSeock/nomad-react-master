import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

// type categories = "TO_DO" | "DOING" | "DONE";
export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

const { persistAtom } = recoilPersist({
  key: "toDo",
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    if (category === Categories.TO_DO) return toDos.filter((toDo) => toDo.category === category);
    if (category === Categories.DOING) return toDos.filter((toDo) => toDo.category === category);
    if (category === Categories.DONE) return toDos.filter((toDo) => toDo.category === category);
  },
});
