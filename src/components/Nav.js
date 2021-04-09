import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <ul><Link to="/">Home</Link></ul>
                    <ul><Link to="/about">About</Link></ul>
                    <ul><Link to="/lists">List</Link></ul>
                    <ul><Link to="/lists/new">Add To List</Link></ul>
                    <ul><Link to="/happyplace">Click here if sad</Link></ul>
                </ul>
            </div>
        )
    }
}

export default Nav
