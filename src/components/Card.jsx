import React from 'react';


class Card extends React.Component {
    render() {
        return (
            <div>
                <div className="uk-card uk-card-default uk-margin-medium-bottom">
                    <div className="uk-card-header">
                        <h3 className="uk-card-title uk-margin-remove-bottom">Title</h3>
                    </div>
                    <div className="uk-card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div className="uk-card-footer">
                        <a href="https://classroom.google.com/u/0/c/MTU5NDYyMjIxMzha" className="uk-button uk-button-text">Read more</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Card;