import React, { useState }  from 'react';
import Photo from '../types/Photo';
import './PhotoComponent.css';

interface PhotoComponentProps {
    photo: Photo;
}

const PhotoComponent: React.FC<PhotoComponentProps> = ({photo}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleImageClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="photo-wrapper">
            {isExpanded && <div className="overlay" onClick={handleImageClick}></div>}
            <div className={`photo-container ${isExpanded ? 'expanded' : ''}`} onClick={handleImageClick}>
                <p className="photo-title">{photo.title}</p>
                <img src={photo.url} alt={photo.title} className="photo-image" />
            </div>
        </div>
    );
};

export default PhotoComponent;
