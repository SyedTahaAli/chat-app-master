import React, { Component } from 'react';
import ChatRoom from './components/ChatRooms.jsx';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>React Chat App</h1>
      <ChatRoom/>
      </div>
    );
  }
}
// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
