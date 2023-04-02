import { useSelector } from 'react-redux';
import { Grid, GridItem, SearchForm, EditForm, Text, Todo } from 'components';

import { selectEditingTodo, selectTodos } from 'redux/todos/selectors';

export const Todos = () => {
  const todos = useSelector(selectTodos);
  const editingTodo = useSelector(selectEditingTodo);

  return (
    <>
      {editingTodo ? <EditForm /> : <SearchForm />}
      {todos.length !== 0 ? (
        <Grid>
          {todos.map(({ id, value: todo }, idx) => (
            <GridItem key={id}>
              <Todo id={id} idx={idx} description={todo} />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Text>There are no any todos</Text>
      )}
    </>
  );
};
