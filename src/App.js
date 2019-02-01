import React, { Component } from 'react';
import Comments from  './Comments'
import NewComment from  './NewComment'

import './App.css';

class App extends Component {

  state = {
    comments : []
  }

  comentar = comment => {
    this.setState({
      comments: [...this.state.comments, comment]
    })    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NewComment comentar={this.comentar}/>
          <Comments comments={this.state.comments}/>
        </header>
      </div>
    );
  }
}

export default App;
