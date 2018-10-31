import React ,{Component}from 'react';
import Card from './Card';

export default class Grid extends  Component{
    render(){
        return (
            <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
                {this.props.data.map(card => {
                    return <div key={card.id}><Card data={card}/></div>
                })}
            </div>
        )
    }

}
