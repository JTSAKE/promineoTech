import React from 'react';

export default class ReviewForm extends React.Component {
    render() {
        return(
            <div className='container'>
                <form>
                    <div className='my-2'>
                        <label className='form-lable' htmlFor='review'></label>
                        <textarea type='text' className='form-control' id='review' placeholder='Enter Review Here...' rows='5' cols='5' ></textarea>
                    </div>
                    <button className='btn btn-primary mt-4'>Leave a Review!</button>
                </form>
            </div>
        );
    }
}