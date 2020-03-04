import React from 'react'

import TodoItem from'./todoItem'
import './todoList.css'

class TodoList extends React.Component{
    render(){
        const {items,clearList}=this.props;
        return(
            <ul className='todoList'>
            <div className='todoList-container'>
            <div className='todoList-header'>
                Todo List
            </div>
            {items.map(item=>{
                    return <TodoItem key={item.id} title={item.title}/>
                })
            }
                 
            <button type='button' className='clear-button' onClick={clearList}> Clear List </button>
            </div>
            </ul>
        );
    }
}

export default TodoList;