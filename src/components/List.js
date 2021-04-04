import React, { Component } from 'react'

class List extends Component {
    render() {
        const { title, due_date , notes } = this.props;
        return (
            <div>
                <h3>{ title }</h3>
                <h6>{ due_date }</h6>
                <p>{ notes }</p>
            </div>
        )
    }
}

export default List
