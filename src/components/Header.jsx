import React from 'react';
import Logo from "./Logo";
import Navigation from "./Navigation";



class Header extends React.Component {
    render() {
        return (
            <nav className="uk-navbar-container uk-margin">
                <div className="uk-navbar-left">
                    <Logo/>
                    <Navigation/>
                </div>
            </nav>

        );
    }
}
export default Header;