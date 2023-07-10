import React from 'react';

export default class Movie extends React.Component {
    render() {
        return(
            <div className='card col-3 text-center m-3'>
                <div className='card-header bg-primary text-white'>
                    {this.props.title} {this.props.releaseDate}
                </div>
                <div className='card-body'>
                    <img className='img-fluid' src={this.props.img}></img>
                </div>
                <div className='card-footer'>
                    {this.props.synopsis}
                </div>
            </div>
        );
    }
}