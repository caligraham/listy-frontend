import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addList } from '../actions'
import { findRenderedComponentWithType } from 'react-dom/test-utils'

class Form extends Component {
    state= {
        title: " ",
        category: " ",
        due_date: " ",
        notes: " "
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.addList(this.state, this.props.history);

    }


    render() {
        return (
            <div>
               <h3>Create A List</h3>
               <form onSubmit= { this.handleSubmit }>
                   <div>
                       <label htmlFor="title">Title </label>
                       <input type="text" id="title" name="title" value={ this.state.title } onChange={ this.handleChange }/>
                       <br />
                       <label htmlFor="category">Category </label>
                       <input type="text" id="category" name="category" value={ this.state.category } onChange={ this.handleChange }/>
                       <br />
                       <label htmlFor="due_date">Due Date </label>
                       <input type="date" id="due_date" name="due_date" value={ this.state.due_date } onChange={ this.handleChange }/>
                       <br />
                       <br />
                       <label htmlFor="notes">Notes </label>
                       <textarea id="notes" name="notes" value={ this.state.notes } onChange={ this.handleChange }></textarea>
                   </div>
                   <input type="submit" value="Create List" />
               </form>
            </div>
        )
    }
}

export default connect(null, { addList })(Form)
