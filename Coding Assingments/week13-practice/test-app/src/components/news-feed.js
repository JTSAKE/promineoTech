import React from 'react';
import Post from './post';

// let e = React.createElement;

export default class NewsFeed extends React.Component {
    render() {
        let comments = [
            {
                content: 'This is my comment 1',
                username: 'Tommy Shelby',
                date: '12/12/2018'
            },
            {
                content: 'This is my double comment 2',
                username: 'Pauly',
                date: '12/18/2024'
            },
            {
                content: 'Last comment',
                username: 'Auther Shelby',
                date: '12/28/2023'
            }
        ]
        return (
            <div className='container'>
                <Post {...{comments: comments, content: 'This is my post content!'}} />
                <Post {...{comments: comments, content: 'This is the second post content!'}}/>
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