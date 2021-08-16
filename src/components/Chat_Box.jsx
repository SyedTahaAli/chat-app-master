import React, { Component } from 'react'
import '../App.css'

class ChatBox extends Component {
	render() {
		return (
			<div className="chat  col-md-8">
				<ul className="list-group">
					{this.props.messages}
					<h1 className="loading">
					{this.props.loadingMessage}
					</h1>
					{/* <p>{this.state.userTyping}</p> */}
				</ul>
			</div>
		);
	}
}

export default ChatBox;