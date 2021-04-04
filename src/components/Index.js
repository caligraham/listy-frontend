import React, { Component } from 'react'
import { connect } from 'react-redux';
import List from './List';


class Index extends Component {
    render() {
        const lists = this.props.lists.map( (list, i) => <List key={i} title={ list.title } due_date={ list.due_date } notes={ list.notes } />)
        return (
            <div>
                { lists }
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
