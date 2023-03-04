import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
    editingTodo: null,
  };

  onSearchSubmit = todo => {
    this.setState(prevState => ({
      todos: [...prevState.todos, { ...todo, id: nanoid() }],
    }));
  };

  onDelete = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };

  toggleEditForm = (obj = null) => {
    this.setState({ editingTodo: obj });
  };

  editTodo = obj => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => (todo.id === obj.id ? obj : todo)),
      };
    });
  };

  render() {
    const { todos, editingTodo } = this.state;
    return (
      <>
        {!editingTodo ? (
          <SearchForm onSubmit={this.onSearchSubmit} />
        ) : (
          <EditForm
            editingTodo={editingTodo}
            toggleEditForm={this.toggleEditForm}
            editTodo={this.editTodo}
          />
        )}
        {Boolean(todos.length) && (
          <Grid>
            {todos.map((todo, index) => {
              return (
                <GridItem key={todo.id}>
                  <Todo
                    id={todo.id}
                    text={todo.text}
                    index={index + 1}
                    onTodoDelete={this.onDelete}
                    editTodo={this.toggleEditForm}
                  />
                </GridItem>
              );
            })}
          </Grid>
        )}
      </>
    );
  }
}
