import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './todo.css'

function TodoList() {
    const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Brooklyn Commons (MetroTech)',
        completed: false
    },
    {
        id: 2,
        text: 'Washington Square Park',
        completed: false
    },
    {
        id: 3,
        text: 'Coney Island',
        completed: false
    }
    ]);

    const [text, setText] = useState('');
    function addTask(text) {
        const newTask = {
        id: Date.now(),
        text,
        completed: false
        };
        setTasks([tasks, newTask]);
        setText('');
    }
    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }
    function toggleCompleted(id) {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {task, completed: !task.completed};
            } else {
                return task;
            } 
        }));
    }
    return (
        <div className="todo-list">
        <h2> Pick a Location </h2>
        <br />
            {tasks.map(task => (
                <TodoItem
                    key={task.id} 
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted} 
                />
            ))}
            <input
                value={text}
                onChange={e => setText(e.target.value)} 
                type="text"
            />
            <button onClick={() => addTask(text)}>Add</button>
        </div>
    );
}
export default TodoList;
