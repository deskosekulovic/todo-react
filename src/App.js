import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import TodoList from './components/TodoList.js';
import Footer from './components/Footer.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      todo: ''
    }
  }

  handleChange = e => {
    this.setState({todo: e.target.value});
  }
  onSubmit = e => {
    e.preventDefault();
  }
  addTodo = () => {
    if(this.state.todo.trim().length===0){
      this.setState({todo: ''});
      return;
    }
    this.setState({
      todos: [...this.state.todos, {
        todo: this.state.todo,
        id: Math.random(),
        completed: false,
        show: true
      }],
      todo: ''
    });
  }
  toggleCompleted = id => {
    this.setState({todos: this.state.todos.map(el => el.id===id ? Object.assign({}, el, {completed: !el.completed}) : el)});
  }

  showUncompleted = () => {
    this.setState({todos: this.state.todos.map(el => el.completed===true ? Object.assign({}, el, {show: false}) : Object.assign({}, el, {show: true}))});
  }
  showCompleted = () => {
    this.setState({todos: this.state.todos.map(el => el.completed===false ? Object.assign({}, el, {show: false}) : Object.assign({}, el, {show: true}))});
  }
  showAll = () => {
    this.setState({todos: this.state.todos.map(el => Object.assign({}, el, {show: true}))});
  }
  deleteTodo = id => {
    this.setState({todos: this.state.todos.filter(el => el.id!==id && Object.assign({}, el))});
  }

  render() {
    return (
      <div className="App">
        <Header onSubmit={this.onSubmit} handleChange={this.handleChange} addTodo={this.addTodo} todo={this.state.todo} />
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} deleteTodo={this.deleteTodo} />
        <Footer showUncompleted={this.showUncompleted} showCompleted={this.showCompleted} showAll={this.showAll} />
      </div>
    );
  }
}

export default App;
