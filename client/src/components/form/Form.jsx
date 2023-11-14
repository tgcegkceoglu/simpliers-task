import React, { Component } from "react";
import { onlyLettersValid, isEmptyValid } from "../../utils/validation";

class FormComponent extends Component {
  constructor(props) {
    super(props);
  }
  handleNameChange = (event) => {
    const filteredInput = onlyLettersValid(event.target.value);
    this.props.setUser(filteredInput);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    if (isEmptyValid(name)) {
      this.props.setWarning([true, "İsim Alanını Boş Bırakmayınız!"]);
    } else if (isEmptyValid(email)) {
      this.props.setWarning([true, "Email Alanını Boş Bırakmayınız!"]);
    } else {
      this.props.setSuccess(true);
    }
  };

  render() {
    return (
      <form id="form" onSubmit={this.handleFormSubmit}>
        <div className="mb-7">
          <input
            type="text"
            id="name"
            placeholder="Ad Soyad"
            onChange={this.handleNameChange}
          />
        </div>

        <div className="mb-10">
          <input type="email" id="email" placeholder="E-mail" />
        </div>

        <button type="submit">Giriş Yap</button>
      </form>
    );
  }
}

export default FormComponent;
