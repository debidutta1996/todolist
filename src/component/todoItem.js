import React from 'react'

import './todoItem.css'

class TodoItem extends React.Component{
    render(){
        const {title}=this.props;
        return(
            <li>
                <div className='items'>{title}</div>

            </li>
        
        );
    }
}

export default TodoItem;