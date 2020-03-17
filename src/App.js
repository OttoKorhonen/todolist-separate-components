import React from 'react';
import './App.css';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Tooltip from '@material-ui/core/Tooltip';



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
      Cell: row => <Button endIcon={<DeleteIcon/>}size="small" color="secondary" onClick={() => deleteItem(row.index)}>Delete</Button>
    }
  ]

  return (
    <div className='App'>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            To do list
          </Typography>
        </Toolbar>
      </AppBar>
      <Tooltip title="Describe your to do">
      <TextField style={{ marginRight: 15 }} label="Description" name="description" onChange={inputChanged} value={todo.description} />
      </Tooltip>
      <Tooltip title="Add date">
      <TextField style={{ marginRight: 15 }} label="Date" name="date" onChange={inputChanged} value={todo.date} />
      </Tooltip>
      <Tooltip title="Add todo">
      <IconButton style={{ margintTop: 10}} onClick={addTodo}>
      <AddCircleIcon color="primary" fontSize="large"/>
      </IconButton>
      </Tooltip>
      <ReactTable columns={columns} data={todo} defaultPageSize={10} filterable={true} />
    </div>
  );
}