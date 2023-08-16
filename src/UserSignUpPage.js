import React, { Component } from 'react'
import axios from 'axios';

export default class UserSignUpPage extends Component {
    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null
    };

    onChange = event  => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    onClickSignup = event => {
        event.preventDefault();
        const body = {
            username: this.state.username,
            displayName: this.state.displayName,
            password: this.state.password
        }
        axios.post("http://localhost:8080/api/1.0/users", body)
    }

    // onChangeUsername = event => {
    //     this.setState({
    //         username: event.target.value
    //     });
    // };
    // onChangeDisplayName = event => {
    //     this.setState({
    //         displayName: event.target.value
    //     });
    // };
    // onChangePassword = event => {
    //     this.setState({
    //         password: event.target.value
    //     });
    // };
    // onChangePasswordRepeat = event => {
    //     this.setState({
    //         passwordRepeat: event.target.value
    //     });
    // };
    
    render() {
    return (
        <form>
            <h1>Sign Up</h1>
            <div>
                <label>Username</label>
                <input name='username' onChange={this.onChange}/>
            </div>
            <div>
                <label>Display Name</label>
                <input name='displayName' onChange={this.onChange}/>
            </div>
            <div>
                <label>Password</label>
                <input name='password' type='password' onChange={this.onChange}/>
            </div>
            <div>
                <label>Password Repeat</label>
                <input name='passwordRepeat' type='password' onChange={this.onChange}/>
            </div>
            <button onClick={this.onClickSignup}>Sing Up</button>
        </form>
    )
  }
}
