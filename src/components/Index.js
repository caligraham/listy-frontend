import React, { Component } from 'react'
import { connect } from 'react-redux';
import ListItem from './ListItem';
import {deleteList} from '../actions/index';



class Index extends Component {


    formatDate = (date) => {
        const dueDate = new Date(date)
        let formattedDate = dueDate.toUTCString()
        return formattedDate.slice(0, -12)
    }

  
    render() {
        if(this.props.loading) {
            return (
              <h3>Loading...</h3>
            )
          }
        
    //    this.props.lists && const lists = this.props.lists.map( (list, i) =>  <ListItem key={i} title={ list.title } due_date={ this.formatDate(list.due_date)} notes={ list.notes } id={ list.id } history={ this.props.history }/>)
       
        return (
            <div>
                <br></br>
                { this.props.lists && this.props.lists.map( (list, i) =>  <ListItem key={i} title={ list.title } due_date={ this.formatDate(list.due_date)} notes={ list.notes } id={ list.id } history={ this.props.history }/>) }
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

