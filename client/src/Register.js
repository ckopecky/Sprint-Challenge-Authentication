import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    
    handleChange =  (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    //click handler

    handleClick = (e) => {
        let promise = axios.post("http://localhost:5000/api/users", this.state);

        promise
            .then(response => {
                console.log("response", response);
                localStorage.setItem("jwt", response.data.token);
                console.log(localStorage.getItem("jwt"));
                this.props.history.push("/jokes");
            })
            .catch(err => {
                console.log({Error: err});
            });
    };


    render() {
        console.log(this.state);
        return (
            <div>
                <h2>New User?</h2>
                <div className="form-wrapper">
                    <label>Username:</label>
                    <input className="input-text" onChange={this.handleChange} type="text" name="username" required="true" placeholder="awesomeDad"/>
                    <label>Password:</label>
                    <input className="input-text" onChange={this.handleChange} type="password" name="password" required="true" placeholder="Must be at least 8 chars"/>
                    <button className="log-button" onClick={this.handleClick}>Register User</button>
                    <div className="register-link"><Link to="/login" className="link-style">Already have an account? Log in here.</Link></div>
                </div>
            </div>
        );
    }
}


export default Register;
