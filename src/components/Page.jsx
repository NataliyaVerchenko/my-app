import React from 'react';
import Pagination from "./Pagination";
import Grid from "./Grid";


class Page extends React.Component {


    render() {
        return (
            <main className ="uk-main">
                <div className="uk-section">
                    <div className="uk-container">
                        <Grid/>
                        <Pagination/>
                    </div>
                </div>
            </main>
        );
    }
}
export default Page;