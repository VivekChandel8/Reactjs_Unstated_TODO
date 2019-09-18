import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem'

const StyledCounter = styled.div`
  /* ... */
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const Button = styled.button`
isplay: inline-block;
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
display: block;
cursor: pointer;
`

export default class SortedTodo extends React.Component {

    TodoComplete = () => {
    localStorage.setItem('status','complete');
       this.props.getList();
    }

    TodoActive = () => {
         localStorage.setItem('status','active');
         this.props.getList();
    }

    TodoAll = () => {
        localStorage.setItem('status','all');
        this.props.getList();
       
    }
    render() {
        return (
            <StyledCounter>
                <Button onClick={this.TodoAll}>All</Button>
                <Button onClick={this.TodoActive}>Active</Button>
                <Button onClick={this.TodoComplete}>Complete</Button>
            </StyledCounter>
        )
    }
}