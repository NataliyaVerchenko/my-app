import React , {Component} from 'react'

export default class Comment extends Component{


    render(){
        // let id = this.props
        // // console.log(id)
        return (
            <div>

                <article className="uk-comment">
                    <header className="uk-comment-header uk-grid uk-grid-medium uk-flex-middle">
                        <div className="uk-width-expand">
                            <h4 className="uk-comment-title uk-margin-remove">id labore ex et quam laborum</h4>
                            <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top"><li>
                                <a href="/">Eliseo@gardner.biz</a>
                            </li>
                            </ul>
                        </div>
                    </header>
                    <div className="uk-comment-body">laudantium enim quasi est quidem magnam voluptate ipsam eos
                        tempora quo necessitatibus
                        dolor quam autem quasi
                        reiciendis et nam sapiente accusantium</div>
                </article>
            </div>
        )
    }

}
