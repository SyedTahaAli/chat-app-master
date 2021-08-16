import React, { Component } from 'react'
import * as firebase from 'firebase';
import '../App.css'
import ChatBox from './Chat_Box'
class ChatRoom extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userTyping: "",
      focus: false,
      message: '',
      messages: [],
      loading: 'Loading....'
    }
  }

  componentDidMount() {
    console.log("mount component");


    // var database = firebase.database();

    // var userref = database.ref('messages/');

    // userref.once('value', function (snapshot) {

    //   console.log(snapshot.val());


    // })

    firebase.database().ref('todo/').on('value', (snapshot) => {

      console.log(snapshot.val());
      const currentMessages = snapshot.val()

      console.log(currentMessages, "current messages");
      // const loading = <p>Loading...</p>
      if (currentMessages != null) {
        this.setState({
          messages: currentMessages,
          loading: " "
        })
      } else {

      }
    })



  }
  updateMessage(event) {
    console.log(event.target.value);

    this.setState({
      message: event.target.value
    })
  }
  userTyping() {
    this.setState({
      userTyping: "someone is typing..."
    })
  }
  notTyping() {
    this.setState({
      userTyping: ''
    })
  }
  submitMessage(event) {
    event.preventDefault()
    console.log(this.state.message);
    const nextMessage = {
      id: this.state.messages.length,
      todo: this.state.message

    }
    firebase.database().ref('todo/' + nextMessage.id).set(nextMessage)
    this.refs.msg.value = "";
  }
  render() {
    const currentMessages = this.state.messages.map((message, i) => {
      return (
        <li key={i} className="bubble">
          <div className="">

          </div>
          {message.todo}
          {/* {message.id} */}
        </li>
      )
    });
    return (

      <div>
        <ChatBox messages={currentMessages}
          loadingMessage={this.state.loading}
        />

        <form className="col-md-8 form" onSubmit={(event) => this.submitMessage(event)}>
          <div className="input-group">
            <input required ref="msg"
              onBlur={(event) => { this.notTyping(event) }}
              onFocus={(event) => { this.userTyping(event) }}
              onChange={(event) => this.updateMessage(event)}
              className="form-control input-sm" type="text" />
            <span className="input-group-btn">
              <button className="btn btn-warning btn-sm" id="btn-chat">
                Send</button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}
export default ChatRoom;
