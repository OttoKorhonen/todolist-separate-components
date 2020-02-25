import React from 'react';
import './App.css';
import Todotable from './components/todolist';

function App() {
  const [description, setDescription] = React.useState({ Description: '', Date: '' });
  const [todo, setTodo] = React.useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodo([...todo, description]);
  }

  const inputChanged = (event) => {
    setDescription({ ...description, [event.target.name]: event.target.value })
  }

  const deleteItem = (event) =>{
    setTodo(todo.filter((todo, i) => i !== parseInt(event.target.id)))
    console.log(event.target.id)
}

  return (
    <div className="App">
      <h1>To do list</h1>
      <form onSubmit={addTodo} id="input-container">
        <fieldset>
          <legend>Add to do</legend>
        Description: <input type="text" name="description" onChange={inputChanged} value={todo.description}></input>
        Date: <input type="date" name="date" onChange={inputChanged} value={todo.date}></input>
        <input type="submit" value="Add"></input>
        </fieldset>
      </form>
      <Todotable todo={todo} description={description} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
