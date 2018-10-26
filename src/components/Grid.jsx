import React from 'react';
import Card from "./Card";
class Grid extends React.Component {
    render() {
        return (
            <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        );
    }
}
export default Grid;