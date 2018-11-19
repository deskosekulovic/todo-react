import React, { Component } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './components/Header.js';
import TodoList from './components/TodoList.js';
import Footer from './components/Footer.js';
import StyledApp, { theme } from './styles/StyledApp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: '',
      show: ''
    };
  }

  handleChange = e => this.setState({ todo: e.target.value });

  addTodo = e => {
    e.preventDefault();
    if (this.state.todo.trim().length > 0) {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            todo: this.state.todo,
            id: Math.random(),
            completed: false
          }
        ],
        todo: ''
      });
    }
  };
  toggleCompleted = id =>
    this.setState({
      todos: this.state.todos.map(el =>
        el.id === id ? Object.assign({}, el, { completed: !el.completed }) : el
      )
    });

  toggleShow = show => this.setState({ show });

  deleteTodo = id =>
    this.setState({
      todos: this.state.todos.filter(
        el => el.id !== id && Object.assign({}, el)
      )
    });

  render() {
    const { todos, todo, show } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <StyledApp>
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
          {todos.length > 0 && <Footer toggleShow={this.toggleShow} />}
        </StyledApp>
      </ThemeProvider>
    );
  }
}

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

export default App;
