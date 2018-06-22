import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Jokes extends Component {
    constructor(props){
        super(props);
        this.state={
            jokes: []
        }
    }

    componentWillMount(){
        //axios request for jokes
        const token = localStorage.getItem("jwt");
        let promise = axios.get("http://localhost:5000/api/jokes", {headers: {Authorization: token}})

        promise
            .then(response => {
                this.setState({jokes: response.data});
            })
            .catch(err => {
                console.log({Error: err.message});
            })
    }

    handleSignOut = () => {
        if (localStorage.getItem('jwt')) {
          localStorage.removeItem('jwt');
    
          this.props.history.push('/login');
        }
      };

    render() {
        return (
            <div>
                {localStorage.getItem("jwt") && 
                    <div><div className="sign-out" onClick={this.handleSignOut}>Sign Out</div>  
                    <h1 className="sign-out">Dad Joke's On You!</h1></div>}
                {!localStorage.getItem("jwt") &&
                    <div className="please-signin"><Link className="link-style" to="/login">Please Sign in to access dad jokes</Link></div>}
            <ul className="collection-of-jokes">
            {this.state.jokes.map(joke => {
                return(
                    <li className="indiv-joke" key={joke._id}>
                        <h4>setup:  {joke.setup}</h4>
                        <p>punchline: {joke.punchline}</p>
                    </li>
                )}
            )}
            </ul>
            </div>
        );
    }
}

export default Jokes;
