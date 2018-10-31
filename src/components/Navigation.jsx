import React, { Component } from 'react';
import { Link } from "react-router-dom"

export default class Navination extends Component {
    render() {
        return (
            <ul className="uk-navbar-nav">
                <li className="uk-active"><Link to="/posts">Posts</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/photos">Photos</Link></li>
                <li><Link to="/albums">Albums</Link></li>
                <li><Link to="/todos">Todos</Link></li>
                <li><Link to="/comments">Comments</Link></li>
            </ul>
        );
    }
}

