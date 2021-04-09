import React, { Component } from 'react'
import { connect } from 'react-redux';
import ListItem from './ListItem';
import {deleteList} from '../actions/index';


class Index extends Component {
    render() {
        const lists = this.props.lists.map( (list, i) => <ListItem key={i} title={ list.title } due_date={ list.due_date } notes={ list.notes } id={ list.id } history={ this.props.history }/>)
        return (
            <div>
                <br></br>
                { lists }
               
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

