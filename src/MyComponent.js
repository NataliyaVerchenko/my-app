import React from 'react';


class MyComponent extends React.Component {
    render() {
        return (
            <div>
                Hello2 {this.props.name}
            </div>
        );
    }
}
export default MyComponent;