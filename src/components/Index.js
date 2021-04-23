import React, { Component } from 'react'
import { connect } from 'react-redux';
import ListItem from './ListItem';


class Index extends Component {

    state = {
        input: 0
    }



    formatDate = (date) => {
        const dueDate = new Date(date)
        let formattedDate = dueDate.toUTCString()
        return formattedDate.slice(0, -12)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

  
    render() {
        if(this.props.loading) {
            return (
              <h3>Loading...</h3>
            )
          }
        
       
        return (
            <div>
                <br></br>
                💗 incrementer 
                <br/>
                <input type="number" name="input" value={this.state.input} onChange={this.handleChange}></input>
                { this.props.lists.map( (list, i) =>  <ListItem key={i} title={ list.title } due_date={ this.formatDate(list.due_date)} notes={ list.notes } id={ list.id } history={ this.props.history } input={this.state.input}/>) }
                <br></br>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lists: state.lists
    }
}

export default connect(mapStateToProps)(Index);

