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
        const {username, displayName, password} = this.state;
        const body = {
            username,
            displayName,
            password
        };

        axios.post("/api/1.0/users", body)
    };

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
        <div className='container'>
            <form>
                <h1 className='text-center'>Sign Up</h1>
                <div className='form-group'>
                    <label>Username</label>
                    <input name='username' className='form-control' onChange={this.onChange}/>
                </div>
                <div className='form-group'>
                    <label>Display Name</label>
                    <input name='displayName' className='form-control' onChange={this.onChange}/>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input name='password' type='password' className='form-control' onChange={this.onChange}/>
                </div>
                <div className='form-group'>
                    <label>Password Repeat</label>
                    <input name='passwordRepeat' type='password' className='form-control' onChange={this.onChange}/>
                </div>
                <div className='text-center'>
                    <button className='btn btn-primary' onClick={this.onClickSignup}>
                        Sing Up
                    </button>
                </div>
            </form>
        </div>
    )
  }
}
