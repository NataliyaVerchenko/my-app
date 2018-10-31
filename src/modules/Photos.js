import React, {Component} from 'react'
import { Header, Breadcrumb} from '../components';
import { Article, PostComments, FormComment} from '../modules';


export default class PostSingle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {},
            comment: {}
        }

        this.addNewComment = this.addNewComment.bind(this);
    }

    addNewComment(comment) {
        this.setState({comment})
    }

    componentDidMount() {

        fetch(`https://jsonplaceholder.typicode.com/posts/1/?_embed=comments&_expand=user`)
            .then((response) => response.json())
            .then(json => {

                this.setState({
                    post :json
                })
            })

    }

    render() {
        const post = this.state.post;
        return (
            <div>
                <Header/>
                <main className="uk-main">
                    <div className="uk-section">
                        <div className="uk-container">
                            <Breadcrumb/>
                            <Article post={post}/>
                            <PostComments comment={this.state.comment} comments={post.comments}/>
                            <FormComment getComment={this.addNewComment}/>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
