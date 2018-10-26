import React from 'react';


class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isControl: false,
            isControlNext: 'uk-pagination-next',
            current: 3,

        };
    }
    render() {
        return (
            <ul className="uk-pagination uk-flex-center">
                <li><a href="https://classroom.google.com/u/0/c/MTU5NDYyMjIxMzha"><span ><svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" ratio="1"><polyline fill="none" stroke="#000" strokeWidth="1.2" idth="1.2" points="6 1 1 6 6 11"></polyline></svg></span></a></li>
                <li><a href="https://classroom.google.com/u/0/c/MTU5NDYyMjIxMzha">1</a></li>
                <li className="uk-disabled"><span>...</span></li>
                <li><a href="https://classroom.google.com/u/0/c/MTU5NDYyMjIxMzha">5</a></li>
                <li><a href="https://classroom.google.com/u/0/c/MTU5NDYyMjIxMzha">6</a></li>
                <li className="uk-active"><span>7</span></li>
                <li><a href="https://classroom.google.com/u/0/c/MTU5NDYyMjIxMzha">8</a></li>
                <li><a href="https://classroom.google.com/u/0/c/MTU5NDYyMjIxMzha"><span ><svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg" ratio="1"><polyline fill="none" stroke="#000" strokeWidth="1.2" points="1 1 6 6 1 11"></polyline></svg></span></a></li>
            </ul>
        );
    }
}
export default Pagination;