import React, { Component } from 'react'
import Comment from './Comment'

class Comments extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          { this.props.comments.map(c => <Comment c={c} /> )}
        </div>
      </div>  
    )
  }
}

export default Comments