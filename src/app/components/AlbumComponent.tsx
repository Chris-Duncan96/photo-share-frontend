import React from 'react';
import Album from '../types/Album';

const AlbumComponent: React.FC<Album> = (props) => {
    // Component logic goes here

    return (
        // JSX markup goes here
        <div>
            <img src="http://example.com/photo1.jpg" alt="Photo 1" />
            <img src="http://example.com/photo2.jpg" alt="Photo 2" />
        </div>
    );
};

export default AlbumComponent;
