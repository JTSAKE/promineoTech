import React from 'react';
import Movie from './movie';

export default class MovieList extends React.Component {
    render() {
        let movies = [
            {
                title: 'Movie1',
                cover: 'http://placekitten.com/g/200/300',
                releaseDate: '12/12/2025'
            },
            {
                title: 'Movie2',
                cover: 'http://placekitten.com/g/200/300',
                releaseDate: '12/12/2025'
            },
            {
                title: 'Movie3',
                cover: 'http://placekitten.com/g/200/300',
                releaseDate: '12/12/2025'
            }
        ]
        return (
            <div className='container'>
                <Movie movie={movies}/>
            </div>
        );
    }
}