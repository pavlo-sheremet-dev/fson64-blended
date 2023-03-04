import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import { SearchFormStyled, FormBtn, InputSearch } from 'components';
import { BtnEdit } from './EditForm.styled';
import { Component } from 'react';

export class EditForm extends Component {
  handleSubmit = event => {
    const { editTodo, editingTodo, toggleEditForm } = this.props;
    event.preventDefault();
    editTodo({ ...editingTodo, text: event.target.search.value });
    toggleEditForm();
  };

  render() {
    const { editingTodo, toggleEditForm } = this.props;

    return (
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <FormBtn type="submit">
          <RiSaveLine size="16px" />
        </FormBtn>
        <BtnEdit type="button" onClick={() => toggleEditForm()}>
          <MdOutlineCancel size="16px" />
        </BtnEdit>
        <InputSearch
          defaultValue={editingTodo.text}
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
        />
      </SearchFormStyled>
    );
  }
}
