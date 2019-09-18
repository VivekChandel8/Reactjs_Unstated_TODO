import React from 'react'

import styled from 'styled-components'

import TodoItem from './TodoItem'

class TodoList extends React.Component { 
state = {
  todos: [],
  todoToShow: "all",
}


updateTodoToShow = s => {
  this.setState({
    todoToShow: s
  });
};

  render () {

    let todos = [];
   
    if (this.state.todoToShow === "all") {
      todos =  this.props.items;
    } else if (this.state.todoToShow === "active") {
     todos =  this.props.items.filter(todo => todo.completed === false);
    } else if (this.state.todoToShow === "complete") {
      todos =  this.props.items.filter(todo => todo.completed === true);
    }
    return(
      <div>
         <div>
          <Button onClick={() => this.updateTodoToShow("all")}>all</Button>
          <Button onClick={() => this.updateTodoToShow("active")}>
            active
          </Button>
          <Button onClick={() => this.updateTodoToShow("complete")}>
            completed
          </Button>
        </div>
      <Wrapper>
    {todos.map(item => {
      console.log(item)
      const onComplete = e => {
        this.props.toggleComplete(item.id)
      }
    return <TodoItem key={item.id} {...item} onComplete={onComplete} />
    })}
  </Wrapper>
 
  </div>

    );
  }
  
  }
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
isplay: inline-block;
color: palevioletred;
font-size: 18px;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 38px;
cursor: pointer;
`

export default TodoList
