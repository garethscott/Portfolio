import React, { Component } from 'react';
import './TodoPage.css';
import WorkPageLight from './WorkPageLight';
import TodoAppImg from '../images/Picture-Project-TodoApp.jpg';

class TodoPage extends Component {
    state = {}
    render() {
        const TodoCopy = "The To-do project is a full-stack application were the user can submit and store to-dos. The front-end is built entirely in React, and the back-end is built in Node.js and Express, connected to a MongoDB database."

        return (
            <div className="todo">
                <WorkPageLight url="/projects" workImage={TodoAppImg} heading="Todo App" copy={TodoCopy} previous="/addressbook" next="/keycode" />
            </div>
        )
    }
}

export default TodoPage;