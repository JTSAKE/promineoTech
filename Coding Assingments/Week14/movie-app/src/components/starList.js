import React from 'react';
import './stars.css';

export default class Stars extends React.Component {
    render() {
        return(
            <div className='container starEl my-3'>
                <button>&#9733;</button>
                <button>&#9733;</button>
                <button>&#9733;</button>
                <button>&#9733;</button>
                <button>&#9733;</button>
            </div>
        );
    }
}