const TodoList = ({ todos }) => {
  return(
    <div>
      <h1>To-do:</h1>
      <ul>
          { todos.map((todo) => <li>{todo}</li>) }
        </ul>
    </div>
  );
}

export default TodoList;
