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
      todo: '',
      show: ''
    }
  }

  handleChange = e => this.setState({todo: e.target.value});

  addTodo = (e) => {
    e.preventDefault();
    if(this.state.todo.trim().length===0){
      this.setState({todo: ''});
      return;
    }
    this.setState({
      todos: [...this.state.todos, {
        todo: this.state.todo,
        id: Math.random(),
        completed: false
      }],
      todo: ''
    });
  }
  toggleCompleted = id => this.setState({todos: this.state.todos.map(el => el.id===id ? Object.assign({}, el, {completed: !el.completed}) : el)});

  showUncompleted = () => this.setState({show:'uncompleted'});

  showCompleted = () => this.setState({show:'completed'});

  showAll = () => this.setState({show:''});

  deleteTodo = id => this.setState({todos: this.state.todos.filter(el => el.id!==id && Object.assign({}, el))});

  render() {
    const { todos, todo, show } = this.state;
    return (
      <div className="App">
        <Header
            handleChange={this.handleChange}
            addTodo={this.addTodo}
            todo={todo}
        />
        <TodoList
            todos={todos}
            show={show}
            toggleCompleted={this.toggleCompleted}
            deleteTodo={this.deleteTodo}
        />
        {todos.length>0 && <Footer
            showUncompleted={this.showUncompleted}
            showCompleted={this.showCompleted}
            showAll={this.showAll}
        />}
      </div>
    );
  }
}

export default App;
