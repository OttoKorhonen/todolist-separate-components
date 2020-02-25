import React from 'react';

const Todotable = (props) => {

    return(
        <div id="list-container">
           <table>
                <tbody>
                {
                props.todo.map((todo, index) =>
                <tr key={index}>
                     <td>{todo.description}</td>
                    <td>{todo.date}</td>
                    <td><button id={index} value={todo.index} onClick={props.deleteItem}>Delete</button></td>
                </tr>
                )}
                </tbody>
           </table>
        </div>
    )
}

export default Todotable;

