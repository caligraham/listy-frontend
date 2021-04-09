import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteList } from '../actions/index'



class ListItem extends Component {




    render() {
        const { title, due_date , notes, id } = this.props;
        return (
    
            <div className="container">
                <br />
                <h3>{ title }</h3>
                <h6>{ due_date }</h6>
                <p>{ notes }</p>
                <br />
                <button className="button-color" onClick={() => this.props.deleteList(id, this.props.history)}>Delete</button>
            </div>
        )
    }

}

export default connect(null, { deleteList })(ListItem)

