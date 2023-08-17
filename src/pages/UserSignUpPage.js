import React, { Component } from 'react'
import { signup } from '../api/apiCalls';

export default class UserSignUpPage extends Component {
    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
        pendingApiCall: false
    };

    onChange = event  => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    onClickSignup = async event => {
        event.preventDefault();
        const {username, displayName, password} = this.state;
        const body = {
            username,
            displayName,
            password
        };
        this.setState({pendingApiCall: true});

        try{
            const response = await signup(body);
        } catch(error) {
        }
        this.setState({pendingApiCall: false});
    };
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
                    <button className='btn btn-primary' onClick={this.onClickSignup} disabled={this.state.pendingApiCall}>
                        {this.state.pendingApiCall && <span className='spinner-border spinner-border-sm'></span>}Sing Up
                    </button>
                </div>
            </form>
        </div>
    )
  }
}
