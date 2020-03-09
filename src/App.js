import React from 'react';
import './App.css';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

export default function App() {
  const [description, setDescription] = React.useState({ Description: '', Date: '' });
  const [todo, setTodo] = React.useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodo([...todo, description]);
  }

  const inputChanged = (event) => {
    setDescription({ ...description, [event.target.name]: event.target.value })
  }

  const deleteItem = (row) => {
    setTodo(todo.filter((todo, index) => index !== row))
  }

  const columns = [
    {
      Header: 'Description',
      accessor: 'description'
    },
    {
      Header: 'Date',
      accessor: 'date'
    },
    {
      filterable: false,
      sortable: false,
      minWidth: 30,
      Cell: row => <button onClick={() => deleteItem(row.index)}>Delete</button>
    }
  ]

  return (
    <div className='App'>
      <label>Description</label>
      <input type="text" name="description" onChange={inputChanged} value={todo.description}></input>
      <label>Date</label>
      <input type="date" name="date" onChange={inputChanged} value={todo.date}></input>
      <button onClick={addTodo}>Add</button>
      <ReactTable columns={columns} data={todo} defaultPageSize={10} filterable={true}/>
    </div>
  );
}


