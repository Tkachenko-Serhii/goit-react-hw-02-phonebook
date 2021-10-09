import React from "react";

export default class Form extends React.Component {
  state = {
    name: "",
    number: "",
  };

  inputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: "", number: "" });
    document.getElementById("form").reset();
  };

  render() {
    return (
      <form id='form' onSubmit={this.formSubmit}>
        <label htmlFor=''>
          <span>Name</span>
          <input
            type='text'
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.inputChange}
          />
        </label>
        <label htmlFor=''>
          <span>Number</span>
          <input
            type='tel'
            name='number'
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title='Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +'
            required
            onChange={this.inputChange}
          />
        </label>
        <button type='submit'>Add contact</button>
      </form>
    );
  }
}
