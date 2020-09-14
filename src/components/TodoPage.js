import React, { Component } from 'react';
import './TodoPage.css';
import WorkPageLight from './WorkPageLight';
import TodoAppImg from '../images/Picture-Project-TodoApp.jpg';

class TodoPage extends Component {
    state = {}
    render() {
        const TodoCopy = "Lorem ipsum dolor sit amet, consectetur adipiscing eli, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        return (
            <div className="todo">
                <WorkPageLight url="/projects" workImage={TodoAppImg} heading="Todo App" copy={TodoCopy} previous="/addressbook" next="/keycode" />
            </div>
        )
    }
}

export default TodoPage;