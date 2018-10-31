import React,{Component} from 'react';
import {  Link } from "react-router-dom"

export default class Card extends Component{
    render(){
        let data = this.props.data
        return (
            <div className="uk-card uk-card-default uk-margin-medium-bottom">
                <div className="uk-card-header">
                    <h3 className="uk-card-title uk-margin-remove-bottom">{data.title.toUpperCase()}</h3>
                </div>
                <div className="uk-card-body">
                    <p>{data.body}</p>
                </div>
                <div className="uk-card-footer">
                    <Link to={`/posts/${data.id}`} className="uk-button uk-button-text">Read more</Link>
                </div>
            </div>
        )
    }

}
