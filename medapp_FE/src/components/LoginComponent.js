import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';




class LoginComponent extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
     
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
      const name = event.target.name;
      this.setState({ [name]: event.target.value});
  } 

submitHandler = event => {
  event.target.className += " was-validated";
  event.preventDefault();
};
 
  render() {
    
    return (
      <div className="centercontainer">
      <MDBContainer>
            
      <MDBRow>
      <MDBCol md="4"></MDBCol>
      <MDBCol md="4">
         
          <form onSubmit={this.submitHandler} noValidate >
          <div className="row mt-3"></div> 
          <div className="row mt-3"></div>
          <div className="row mt-3"></div>
            <p className="h5 text-center mb-4">Login</p>
            <div className="grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                className="form-control"
                type="text"
                name="username"
                required
                value={this.state.username}
                onChange={this.handleChange} 
              />
            
              <MDBInput
                label="Your password"
                icon="lock"
                name="password"
                group
                type="password"
                validate
                value={this.state.password}
                onChange={this.handleChange} 
              />
            </div>
            <div className="text-center">
              <MDBBtn color="peach" gradient="peach" onClick={this.submitHandler} >Login</MDBBtn> 
              
            </div>
             
          </form>
        </MDBCol>
        <MDBCol md="3"></MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    );
  }
}


export default LoginComponent;