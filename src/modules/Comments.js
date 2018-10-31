import React from 'react'
import {Header,Pagination} from '../components';
import {Comment} from '../modules';


export default function Comments() {
    return (
        <div>
            <Header/>
            <main className="uk-main">
                <div className="uk-section">
                    <div className="uk-container">
                        <h2>Comments</h2>
                        <Comment/>
                        <Pagination/>
                    </div>
                </div>
            </main>
        </div>
    )
}
