import React from 'react';


class Navigation extends React.Component {

    render() {
        return (
            <ul className="uk-navbar-nav">
                <li className="uk-active"><a href="posts.html">Posts</a></li>
                <li><a href="users.html">Users</a></li>
                <li><a href="photos.html">Photos</a></li>
                <li><a href="albums.html">Albums</a></li>
                <li><a href="todos.html">Todos</a></li>
                <li><a href="comments.html">Comments</a></li>
            </ul>
        );
    }
}
export default Navigation;