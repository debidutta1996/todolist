import React from 'react'

import './todoInput.css'

class TodoInput extends React.Component{


    render(){
        const {item,handleChange,handleSubmit}=this.props;
        return(
            <form className='input-area' onSubmit={handleSubmit}>
            <div className='input-box'>
            <input type='text' className='textarea' placeholder='Add a TodoList'
            value={item}
            onChange={handleChange} />
            </div>
            <button type='submit' className='addItem'> Add Item </button>
            </form>
        );
    }
}

export default TodoInput;