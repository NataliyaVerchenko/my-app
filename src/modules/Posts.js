import React, {Component} from 'react'
import { Header, Grid, Pagination} from '../components';


export default class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            limit: 6,
            page: 1
        }
        this.handlePagination = this.handlePagination.bind(this);
    }
    handlePagination() {
        this.setState({page : this.state.page + 1});
    }
    componentDidMount() {

        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${this.state.page}&_limit=${this.state.limit}`)
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    posts: json
                })
            })
    }

    render() {

        return (
            <div>
                <Header/>
                <main className="uk-main">
                    <div className="uk-section">
                        <div className="uk-container">
                            <h2>Posts</h2>
                            <Grid data={this.state.posts}/>
                            <Pagination handlePagination={this.handlePagination}/>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
