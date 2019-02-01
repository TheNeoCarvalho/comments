import React, { Component } from 'react'

class Comment extends Component {
  render() {
    return(
        <div className="comments">{this.props.c}</div>
    )
  }
}

export default Comment