import React from "react";
import { Todo } from "../model";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, setTodos, todos }: Props) => {
  return <div>SingleTodo</div>;
};

export default SingleTodo;
