import React from 'react';
import SearchResults from 'react-filter-search';
import styled from 'styled-components';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }


   handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.onAddTodo(e.target.value)
    }
  }

 

  render() {
  
console.log("add todo console >>>",this.props.items)
  return (
    <div>
    <Input
      type='text'
      onKeyPress={this.handleKeyPress}
      placeholder='Add new todo...'
    />
    </div>
  );
}
}

const Input = styled.input`
  background: #3b4049;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 10px 18px;
  font-size: 24px;
  height: 40px;
  width: 500px;
  margin-bottom: 16px;

  &::placeholder {
    color: #8d96a8;
  }
`

export default AddTodo
