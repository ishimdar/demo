import React, { Component } from 'react';
import axios from 'axios';

import TextValidator from '../validation/TextValidator';
import { ValidatorForm } from 'react-form-validator-core';


class LoginForm extends Component {

    state = {
        userInformation: null,
        userEmail: '',
        userPassword: '',
        loginSucces: false
    }

    componentWillMount() {
        axios.get(`https://hello-world-ahaamd.firebaseio.com/loginList.json`)
            .then((res) => {
                // console.log('res', res);    
                this.modifyUserDataResponse(res);
                return res;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    modifyUserDataResponse = (getUserRes) => {
        if (getUserRes.data !== null) {
            let userData = getUserRes.data;
            // console.log(Object.keys(userData));
            let modifyData = Object.keys(userData).map((item) => {
                return userData[item];
            })

            this.setState({
                userInformation: modifyData
            });
            // console.log('modifyData', modifyData);            
        }
    }



    onSubmitLoginForm = (e) => {
        e.preventDefault();                
        let filterLogin = null;
        debugger;
        if(this.state.userInformation !== null){
            filterLogin = this.state.userInformation.filter( (item) => {
                return item.userEmail === this.state.userEmail && item.password === Number(this.state.userPassword);
            });
            console.log('filterLogin', filterLogin);
            if(filterLogin.length === 0){
                this.setState({
                    loginSucces: true
                });
            }else{
                // SHOW_LOGIN_FORM.loginFormShow = false;
                this.hideLoginComponent();
            }
            // return filterLogin;
        }
        // console.log('SHOW_LOGIN_FORMSubmit', SHOW_LOGIN_FORM);        
    }

    hideLoginComponent = () => {
        this.props.parentMethod();
    }

    onChangeEvent = (e) => {
        if (e.target.name === 'userEmail') {
            // console.log('e.target', e.target.name);
            this.setState({
                userEmail: e.target.value
            });
        } else {
            // console.log('e.target', e.target.name);
            this.setState({
                userPassword: e.target.value
            });
        }
    }

    render() {        
        return (
            <div className="col-sm-6 offset-sm-3">                
                <ValidatorForm ref="form" onSubmit={(e) => this.onSubmitLoginForm(e)}>

                    <div className="form-group">
                        <label>User Email</label>
                        <TextValidator
                            onChange={(e) => this.onChangeEvent(e)}
                            name="userEmail"
                            type="email"
                            value={this.state.userEmail}
                            validators={['required', 'isEmail']}
                            errorMessages={['Email is required', 'email is not valid']}
                        />
                    </div>

                    <div className="form-group">
                    <label>Password</label>
                        <TextValidator
                            onChange={(e) => this.onChangeEvent(e)}
                            name="userPassword"
                            value={this.state.userPassword}
                            validators={['required']}
                            errorMessages={['Password is required']}
                            type="password"
                        />
                    </div>

                    {
                        this.state.loginSucces ? <div className="form-group">
                        <p className="errorMsg">Please enter valid email and password </p>
                    </div> : ''
                    }
                    
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </ValidatorForm>
            </div>
        );
    }
}

export default LoginForm;