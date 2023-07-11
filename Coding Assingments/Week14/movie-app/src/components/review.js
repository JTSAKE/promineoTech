import React from 'react';

export default class Review extends React.Component {
    render() {
        return(
            <div className='card my-4 text-start'>
                <div className='card-body'>{this.props.content}</div>
                <div className='card-footer'>{this.props.reviewDate} | <strong>{this.props.reviewer}</strong></div>
            </div>
        );
    }
}