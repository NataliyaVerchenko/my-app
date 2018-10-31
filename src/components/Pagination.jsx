import React, { Component } from 'react';
import {  Link } from "react-router-dom";

class Pagination extends Component {
    render() {
        return (
            <ul className="uk-pagination uk-flex-center" data-uk-margin>
                <li><Link to="/"><span data-uk-pagination-previous><svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" ratio="1"><polyline fill="none" stroke="#000" strokeWidth="1.2" points="6 1 1 6 6 11"></polyline></svg></span></Link></li>
                <li><Link to="/">1</Link></li>
                <li className="uk-disabled"><span>...</span></li>
                <li><Link to="/">5</Link></li>
                <li><Link to="/">6</Link></li>
                <li className="uk-active"><span>7</span></li>
                <li><Link to="/">8</Link></li>
                <li><Link to="/"><span data-uk-pagination-next><svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" ratio="1"><polyline fill="none" stroke="#000" strokeWidth="1.2" points="1 1 6 6 1 11"></polyline></svg></span></Link></li>
            </ul>
        );
    }
}

export default Pagination;
