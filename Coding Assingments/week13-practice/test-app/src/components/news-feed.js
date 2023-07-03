import React from 'react';
import Post from './post';

let e = React.createElement;

export default class NewsFeed extends React.Component {
    render() {
        return (
            <div className='container'>
                <Post />
                <Post />
            </div>
        );

        // return e('div', 
        //         {className: 'container'},
        //         e(Post, {}, null),
        //         e(Post, {}, null),
        //         e(Post, {}, null),
        //     );
    }
}