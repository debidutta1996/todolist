import React  from 'react'
import ReactDOM from 'react-dom'
import TodoInput from './component/todoInput'
import TodoList from './component/todoList'
import './index.css'
import uuid,{ v4} from 'uuid'

class App extends React.Component{
    state={
        items:[],
        id: uuid(),
        item:'',
        editItem:false
    }
    handleChange= e =>{
        this.setState({
            item:e.target.value
        });

    };
    handleSubmit =  e =>{
        e.preventDefault();
        const newItem ={
            id:this.state.id,
            title:this.state.item
        };
        console.log(newItem);
        const updatedItems = [...this.state.items,newItem]
        this.setState({
            items:updatedItems,
            item:'',
            id:uuid(),
            editItem:false
        });
    };
    clearList = e =>{
        this.setState({
            items:[],
            item:'',
        });
    };




    render(){
        return(
            <div className='container'>
            <div className='row'> Todo Input
                <TodoInput item={this.state.item} handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}/>
                <TodoList items={this.state.items} clearList={this.clearList}/>
            </div>
            </div>
            
        );
    }
}

ReactDOM.render(<App />,document.querySelector('#root'));