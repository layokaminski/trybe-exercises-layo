import { useState } from 'react';
import TodoList from './TodoList';
import useArray from './hooks/useArray';

function App() {
  const [ task, setTask ] = useState('');
  const { addTodos, todos } = useArray();
  
  const handleChange = ({ target: { value } }) => {
    setTask(value);
  };

  const handleClick = () => {
    addTodos(task);
    setTask('');
  };

  return (
    <div>
      <label>Add a task:
        <input
          name="task"
          value={ task }
          onChange={ handleChange }
          />
      </label>
      <button onClick={() => handleClick() }>Add</button>
      <TodoList todos={ todos }/>
    </div>
  );
}

export default App;
