import { useState } from 'react';

function useArray() {
  const [todos, setTodos] = useState([]);

  const addTodos = (task) => {
    setTodos(todos.concat(task));
  }

  return {
    todos,
    addTodos,
  }
}

export default useArray;
