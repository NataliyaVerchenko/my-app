import React, { Component } from 'react';
import './App.css';
import Page from './components/Page';
import Header from "./components/Header";

class App extends Component {
    render() {
        return (
            <div>
              <Header/>
              <Page/>
            </div>
        );
    }
}
export default App;