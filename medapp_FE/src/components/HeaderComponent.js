import React, { Component } from 'react';
import {API_ENDPOINT } from '../environment/envConfig';
import { MDBContainer } from 'mdbreact'
import axios from 'axios';


export default class HeaderComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             header : "",
             url:""
        }
    }
  
    render() {
        axios.get(API_ENDPOINT+"users/test")
        .then( response => {
            const val = response.data;
            this.setState( {header: val})
        }).catch(error => {
            alert(error);
        });
        return(
        
          <MDBContainer>
             <div className="w-responsive text-center mx-auto p-3 mt-2">{this.state.header} </div>
          </MDBContainer>
        );
    }
}