import React from 'react'
import {  Link } from "react-router-dom"
export default function Breadcrumb() {
    return (
        <ul className="uk-breadcrumb uk-margin-medium-bottom">
            <li><Link to="/">Item</Link></li>
            <li><Link to="/">Item</Link></li>
            <li><span>Active</span></li>

        </ul>
    )
}