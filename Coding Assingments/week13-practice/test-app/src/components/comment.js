import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';


export default class Comment extends React.Component {
    render() {
        return (
            <div className= 'card w-75 my-2'>
                <div className= 'card-header bg-primary text-white'>{this.props.username} {this.props.date}</div>
                <div className= 'card-body'>
                    {this.props.content}
                </div>
                <div className= 'card-footer'>
                    <LikeButton />
                    <span> </span>
                    <ReplyButton />
                </div>
            </div>
        ); 

        // return e('div', 
        //     {class: 'card w-75'}, 
        //     e('div',
        //         {class: 'card-header bg-sucess text-white'},
        //         'Username and Time'),
        //     e('div', 
        //         {class: 'card-body'},
        //         'Comment Content'),
        //     e('div',
        //         {class: 'card-footer'},
        //         e(LikeButton, {}, null),
        //         e('span', {}, ' '),
        //         e(ReplyButton, {}, null)
        //     )
        // );
    }
}