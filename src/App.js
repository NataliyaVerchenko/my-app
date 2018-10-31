import React, { Component } from 'react';

import { Users, Photos, Todos, Comments, PostSingle, Albums, Posts} from './modules';

import { Route } from "react-router-dom";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" component={Posts} />
                <Route exact path="/posts" component={Posts} />
                <Route path="/users" component={Users} />
                <Route path="/albums" component={Albums} />
                <Route path="/photos" component={Photos} />
                <Route path="/todos" component={Todos} />
                <Route path="/comments" component={Comments} />
                <Route path="/posts/:id" component={PostSingle} />

            </div>
        );
    }
}

export default App;
