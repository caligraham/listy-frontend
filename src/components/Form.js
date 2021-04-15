import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addList } from '../actions'
import { findRenderedComponentWithType } from 'react-dom/test-utils'

class Form extends Component {
    state= {
        title: " ",
        category_attributes: " ",
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
                <br></br>
                <br></br>
               <h3>Create A New Item</h3>
               <form onSubmit= { this.handleSubmit }>
                   <div className="container">
                       <label htmlFor="title">Title </label>
                       <input className="inputs" type="text" id="title" name="title" value={ this.state.title } onChange={ this.handleChange }/>
                       <br />
                       <label htmlFor="category_attributes">Category </label>
                       <input className="inputs" type="text" id="category_attributes" name="category_attributes" value={ this.state.category_attributes } onChange={ this.handleChange }/>
                       <br />
                       <label htmlFor="due_date">Due Date </label>
                       <input className="inputs" type="date" id="due_date" name="due_date" value={ this.state.due_date } onChange={ this.handleChange }/>
                       <br />
                       <br />
                       <label htmlFor="notes">Notes </label>
                       <textarea className="inputs" id="notes" name="notes" value={ this.state.notes } onChange={ this.handleChange }></textarea>
                   </div>
                   <input className="button-color" type="submit" value="Create List" />
               </form>
               <br></br>
               <br></br>
               <br></br>
               <br></br>
            </div>
        )
    }
}

export default connect(null, { addList })(Form)
