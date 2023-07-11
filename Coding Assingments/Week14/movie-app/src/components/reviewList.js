import React from 'react';
import Review from './review';

export default class ReviewList extends React.Component {
    render() {
            let reviews = [
                {
                    content: '"Indiana Jones and the Dial of Destiny" is a thrilling addition to the iconic franchise, delivering a nostalgic adventure that captures the spirit of the original films. With a captivating storyline, exhilarating action sequences, and  Ford\'s charismatic return as the legendary, it\'s a must-watch for fans and newcomers alike.',
                    reviewDate: '04/26/2023',
                    reviewer: 'Maximilian Beaumont'
                }
            ];
            return(
            <div className='container'>
                <Review {...reviews[0]}/>
            </div>
        );
    }
}