import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

export class Todos extends Component {
  state = {
    todos: [],
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

  render() {
    const { todos } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.onSearchSubmit} />
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
