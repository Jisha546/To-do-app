import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/todos').then(res => setTodos(res.data));
  }, []);

  const addTodo = () => {
    axios.post('http://127.0.0.1:8000/todos', null, { params: { item: newTodo } })
      .then(res => {
        setTodos(res.data.todos);
        setNewTodo('');
      });
  };

  return (
    <div>
      <h1>To‑Do App</h1>
      <input value={newTodo} onChange={e => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, i) => <li key={i}>{todo}</li>)}
      </ul>
    </div>
  );
}

export default App;
