import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }


    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value});
    }

    handleClick = (e) => {
        let promise = axios.post("http://localhost:5000/api/login", this.state)
        promise
            .then(response => {
                //localStorage set item
                localStorage.setItem("jwt", response.data.token);
                this.props.history.push("/jokes");
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <header className="App-header">
                     <h1 className="App-title">Dad Joke's on You!!! </h1>
                </header>
                <div className="form-wrapper">
                    <label>Username:</label>
                    <input className="input-text" name="username" value={this.state.username} type="text" onChange={this.handleChange}/>
                    <label>Password:</label>
                    <input className="input-text" name="password" value={this.state.password} type="password" onChange={this.handleChange}/>
                    <div><button onClick={this.handleClick}>Sign-In</button></div>
                </div>
            </div>
        );
    }
}

export default Login;
