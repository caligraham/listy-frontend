import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteList } from '../actions/index'



class ListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }


    render() {
        const { title, due_date , notes, id, input } = this.props;
        return (
            <div>
                <br></br>
                <div className="container">
                <br />
                <h3>{ title }</h3>
                <h6>{due_date }</h6>
                <p>{ notes }</p>
                <br />
                <button className="button-color" onClick={() => this.props.deleteList(id, this.props.history)}>Just did it 🦄</button> 
                <p> {this.state.count} likes</p> 
                <button onClick={() => this.setState({ count: this.state.count + parseInt(input)})}>💗</button>
                </div>
            </div>
        )
    }

}
// history is prop provided by react router

export default connect(null, {deleteList})(ListItem)

// dispatcher action 

