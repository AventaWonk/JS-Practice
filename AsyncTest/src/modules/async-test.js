import React, { Component } from 'react';

export default class AsyncTest extends Component {
	constructor(props){
		super(props);
		this.handleAddMessageButtonClick = this.handleAddMessageButtonClick.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		props.getMessages();
	}
	
	handleTextChange(e) {
   this.setState({text: e.target.value});
  }

	handleAddMessageButtonClick() {
		this.props.addMessage(this.state.text);
	}

	render() {
		let messages = this.props.messages.map((message, i) => {
				return <div key={i}>{message.text}</div>
		});

		return (
			<div>
				<div className="form-group">
				    <label >Text</label>
				    <input type="email" className="form-control" onChange={this.handleTextChange}/>   
				</div>
				<button onClick={this.handleAddMessageButtonClick}>Add message</button>
				{messages}
			</div>
		);
	}
}
