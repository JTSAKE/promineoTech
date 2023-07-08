import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';
import Comment from './comment';


export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            content: props.content,
        };
    }
    render() {
        let tempComments = this.state.comments;
        setTimeout(() => this.setState({content: 'state updated', comments: []}, 
        () => setTimeout(() => this.setState({comments: tempComments}), 2000)), 2000);
        let comments =[];
            if (this.state.comments) {
                for (let comment of this.state.comments) {
                    comments.push(<Comment {...comment}/>);
                }
            }
        return (
            <div className='card w-75 my-2'>
                <div className='card-header bg-success text-white'>Username and Time</div>
                <div className='card-body'>{this.state.content}</div>
                <div className='card-footer'>
                    <LikeButton />
                    <span> </span>
                    <ReplyButton />
                    <br></br>
                    {comments}
                </div>
            </div>
        );
        
        // return e('div', 
        //     {className: 'card w-75'}, 
        //     e('div',
        //         {class: 'card-header bg-success text-white'},
        //         'Username and Time'),
        //     e('div', 
        //         {className: 'card-body'},
        //         'Post Content'),
        //     e('div',
        //         {className: 'card-footer'},
        //         e(LikeButton, {}, null),
        //         e('span', {}, ' '),
        //         e(ReplyButton, {}, null),
        //         e('br', {}, null),
        //         e(Comment, {}, null),
        //         e(Comment, {}, null)
        //     )
        // );
    }
}