import React from 'react';
import Stars from './starList';
import ReviewList from './reviewList';
import Review from './review';
import ReviewForm from './reviewForm';

export default class Movie extends React.Component {
    render() {
        return(
            <div className='card col-3 text-center m-3'>
                <div className='card-header bg-primary text-white'>
                    {this.props.title} ({this.props.releaseDate})
                </div>
                <div className='card-body'>
                    <img className='img-fluid my-auto' src={this.props.img}></img>
                </div>
                <div>
                    <Stars/>
                </div>
                <div className='card-footer p-4'>
                    {this.props.synopsis}
                </div>
                <div>
                    <ReviewForm/>
                </div>
                <div className='container mt-5'>
                    <h4 className='display-5 mb-3'>Reviews:</h4>
                    <ReviewList/>
                </div>
            </div>
        );
    }
}