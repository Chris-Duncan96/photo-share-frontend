import React from 'react';
import Album from '../types/Album';
import PhotoComponent from './PhotoComponent';
import './AlbumComponent.css'; 

interface AlbumComponentProps {
    album: Album;
    photoIdFilter?: string;
}

const AlbumComponent: React.FC<AlbumComponentProps> = ({album, photoIdFilter}) => {

    if(photoIdFilter) {
        const filteredPhotos = album.photos.filter(photo => 
            photo.photoId.toString() === (photoIdFilter)
        )
        if(filteredPhotos.length === 0) {
            return <></>;
        }
        return (
            <div className="album-container" aria-label={`Album ${album.albumId}`}>
                <h2 className="album-title">{`Album ${album.albumId}`}</h2>
                <div className="photos-container">
                    {filteredPhotos.map(photo => (
                        <PhotoComponent key={photo.photoId} photo={photo} />
                    ))}
                </div>
            </div>
        );
    }
    return (
        <div className="album-container" aria-label={`Album ${album.albumId}`}>
            <h2 className="album-title">{`Album ${album.albumId}`}</h2>
            <div className="photos-container">
                {album.photos.map(photo => (
                    <PhotoComponent key={photo.photoId} photo={photo} />
                ))}
            </div>
        </div>
    );
};

export default AlbumComponent;
