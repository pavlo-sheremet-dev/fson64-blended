import { Component } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    search: '',
  };
  onInputChange = evt => {
    this.setState({ search: evt.currentTarget.value });
  };

  onSubmit = evt => {
    evt.preventDefault();
    const text = this.state.search.trim();
    if (!text) return;
    this.props.onSubmit({ text });
    this.setState({ search: '' });
  };

  render() {
    return (
      <SearchFormStyled onSubmit={this.onSubmit}>
        <InputSearch
          onChange={this.onInputChange}
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
          value={this.state.search}
        />
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
      </SearchFormStyled>
    );
  }
}
