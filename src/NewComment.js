import React, { Component } from 'react'


class NewComment extends Component{

    state = {
        newComment: ''
    }

    handleComments = e => {
        this.setState({
            newComment: e.target.value
        })
      }

    comentar = () => {
        this.props.comentar(this.state.newComment)
        this.setState({
            newComment:''
        })
    } 

    render(){
        return (
            <div className="row">
                <div className="col-md-10">
                    <textarea value={this.state.newComent} onChange={this.handleComments}></textarea>
                </div>
                <div className="col-md-2">
                    <button onClick={this.comentar} className="btn btn-default">Comentar</button>
                </div>
            </div>
        )
    }
}

export default NewComment