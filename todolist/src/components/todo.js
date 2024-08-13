import { useState } from "react";
import './todo.css';

function Todo() {
    const [value, setValue] = useState("");
    const [todo, setToDo] = useState([]);

    const addTask = () => {
        if (value.trim() !== "") { 
            setToDo([...todo, value]);
            setValue("");
        }
    };

    const deleteTask = (index) => {
        setToDo(todo.filter((_, i) => i !== index));
    };

    return (
        <div className="box">
            <div className="input">
                <h1>To Do List</h1>
                <input
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter list item"
                    value={value}
                />
                <button onClick={addTask}>ADD</button>
            </div>
            <div className="list">
                <ul>
                    {todo.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => deleteTask(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todo;
