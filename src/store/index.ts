import TodoModel from "./TodoModel";
import { createContext } from "react";

const TodoStore = createContext(new TodoModel())

export {
  TodoStore,
}