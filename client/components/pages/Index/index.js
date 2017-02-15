import React from 'react';
import {Link} from 'react-router';
import './index.scss';
import Client from '../../Client.js';
import Header from '../../partials/Header';

class Index extends React.Component {

	constructor(props){
		super(props);
		this.state = {user: {username: ''}}
	}

  componentDidMount(){
    Client.get('/api/currentuser', (res) => {
      this.setState({user: res});
    });
  }

  render(){
    let message = '';
    if(this.state.user){
      if(this.state.user.username == ''){
        message = '';
      }
      else
        {message = <h1>Hello, {this.state.user.username}!</h1>
      }
    }
    else{
      message = <h1>You aren't logged in.</h1>
    }
    
    return (
    	<div>
        <Header user={this.state.user}/>
    		{message}
      </div>
    );
  }
}

export default Index;