import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import axios from 'axios';
import { API_ENDPOINT } from '../environment/envConfig';

export class RegisterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formErrors: {},
      formValues: {
        name: '',
        username: '',
        email: '',
        question: '',
        answer: '',
        password: ''

      }
    };
    this.handleChange = this.handleChange.bind(this)

  }
  handleChange(event) {
    //  const name = event.target.name;
    let formValues = this.state.formValues;
    let name = event.target.name; // Field name
    let value = event.target.value; // Field value

    formValues[name] = value;
    this.setState({ formValues })
    //this.setState({[this.formValues.name]: event.target.value});
  }
  requiredCheck = (value) => {
    if (!!value) {
      return false;
    } else {
      return 'This field is required';
    }
  }


  submitHandler = event => {
    // alert(this.state.formValues.question);
    axios.post(API_ENDPOINT + 'users', this.state.formValues)
      .then(function (response) {
        alert(response.status);
        //Perform action based on response
      })
      .catch(function (error) {

        //Perform action based on error
      });

    event.preventDefault();
  }
  render() {
    return (

      <MDBContainer>

        <MDBRow>
          <MDBCol md="3"></MDBCol>
          <MDBCol md="6">
            <form onSubmit={this.submitHandler}>
              <div className="row mt-3"></div>
              <div className="row mt-3"></div>

              <p className="h5 text-center mb-4">Sign up</p>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.handleChange}
                  name="name"

                />
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  name="email"
                  validate
                  error="wrong"
                  onChange={this.handleChange}
                  success="right"
                />

                <MDBInput
                  label="Your password"
                  icon="lock"
                  group
                  name="password"
                  type="password"
                  validate
                  onChange={this.handleChange}
                />
                <MDBInput
                  label="Confirm your password"
                  icon="lock"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.handleChange}
                />
                <MDBInput
                  label="Secret Question"
                  icon="exclamation-triangle"
                  group
                  name="question"
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.handleChange}
                />
                <MDBInput
                  label="Secret Answer"
                  icon="exclamation-triangle"
                  group
                  name="answer"
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.handleChange}
                />
              </div>
              <div className="text-center">
                <MDBBtn color="primary" gradient="peach" onClick={this.submitHandler}  >Register</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

    );
  }
}
export default RegisterComponent;