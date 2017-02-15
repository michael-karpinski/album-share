import React from 'react';
import './index.scss';

class Index extends React.Component {

	constructor(props){
		super(props);
		this.state = {message: ''}
	}

	changeInput(e){
		this.setState({message: e.target.value})
	}

  render(){
    return (
    	<div>
    		<label>Message</label><br/>
    		<input onChange={this.changeInput.bind(this)} value={this.state.message} />
      	<h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default Index;