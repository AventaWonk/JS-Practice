import React, { Component } from 'react';

class Message extends Component {
	constructor(props){
		super(props);
		this.handleDeleteMessageButtonClick = this.handleDeleteMessageButtonClick.bind(this);
		this.handleEditMessageButtonClick = this.handleEditMessageButtonClick.bind(this);
		this.handleSaveMessageButtonClick = this.handleSaveMessageButtonClick.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.state = {text: this.props.text, visibility: ""};
	}

	handleMouseEnter() {
   this.setState({visibility: "glyphicon glyphicon-pencil"});
  }

  handleMouseOver() {
   this.setState({visibility: ""});
  }

	handleTextChange(e) {
   this.setState({text: e.target.value});
  }

	handleDeleteMessageButtonClick() {
		this.props.deleteMessage(this.props.id);
	}

	handleEditMessageButtonClick() {
		this.props.editMessage(this.props.id);
	}

	handleSaveMessageButtonClick() {
		this.props.saveMessage(this.props.id, this.state.text);
	}

	render() {
		if(this.props.isEditeble) {
			return (
				<li className="list-group-item">
					<input className="" value={this.state.text} onChange={this.handleTextChange}/> 
					<span className="glyphicon glyphicon-ok" onClick={this.handleSaveMessageButtonClick}/>
					<span className="glyphicon glyphicon-remove pull-right" onClick={this.handleDeleteMessageButtonClick}/>
				</li>
			);
		} else {
			return (
				<li className="list-group-item" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseOver}>
					<span>{this.props.text}</span> 
					<span className={this.state.visibility} onClick={this.handleEditMessageButtonClick}/>
					<span className="glyphicon glyphicon-remove pull-right" onClick={this.handleDeleteMessageButtonClick}/>
				</li>
			);
		}
	}
}

export default class AsyncTest extends Component {
	constructor(props){
		super(props);
		this.handleAddMessageButtonClick = this.handleAddMessageButtonClick.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
		this.state = {text: ""};
		props.getMessages();
	}
	
	handleTextChange(e) {
   this.setState({text: e.target.value});
  }

	handleAddMessageButtonClick() {
		this.setState({text: ""});
		this.props.addMessage(this.state.text);
	}

	

	render() {
		let messages = this.props.messages.map((message, i) => 
				<Message key={i} id={message.id} text={message.text} isEditeble={message.isEditeble} deleteMessage={(id) => this.props.deleteMessage(id)} editMessage={(id) => this.props.editMessage(id)} saveMessage={(id, text) => this.props.saveMessage(id, text)}/>
		);

		return (
			<div>
				<div className="col-lg-6">
					<div className="row">
						<div className="input-group">
				      <input type="text" className="form-control" placeholder="Input text here..." value={this.state.text} onChange={this.handleTextChange}/>
				      <span className="input-group-btn">
				        <button className="btn btn-default" type="button" onClick={this.handleAddMessageButtonClick}>Add message</button>
				      </span>
				    </div>
					</div>
					<div className="row">
						<ul className="list-group">
							{messages}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
