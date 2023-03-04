import { Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

export const Todo = ({ id, text, index, onTodoDelete, editTodo }) => {
  const handleClick = () => {
    onTodoDelete(id);
  };

  const onEditBtnClick = () => {
    editTodo({ id, text });
  };
  return (
    <TodoWrapper>
      <Text textAlign="center" marginBottom="20px">
        TODO #{index}
      </Text>
      <Text>{text}</Text>
      <DeleteButton type="button">
        <RiDeleteBinLine size={24} onClick={handleClick} />
      </DeleteButton>
      <EditButton>
        <RiEdit2Line size={24} onClick={onEditBtnClick} />
      </EditButton>
    </TodoWrapper>
  );
};
