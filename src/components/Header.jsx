import React, { Component } from 'react';
import { Logo, Navigation } from '../components';


class Header extends Component {
    render() {
        return (
            <nav className="uk-navbar-container uk-margin" data-uk-navbar>
                <div className="uk-navbar-left">
                    <Logo />
                    <Navigation />
                </div>
            </nav>
        );
    }
}

export default Header;
