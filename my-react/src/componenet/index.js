import React, { Component } from 'react';

import LoginForm from './LoginForm';
import DetailsForm from './DetailsForm';


class ParentComponent extends Component {
    state={
        loginFormShow: true
    }

    someMethod = () => {        
        this.setState({
            loginFormShow: false
        });
    }

    render(){        
        return(
            <>
                {
                   this.state.loginFormShow ?  <LoginForm parentMethod={this.someMethod} /> : <DetailsForm />
                }
                                
            </>
        );
    }
}

export default ParentComponent;