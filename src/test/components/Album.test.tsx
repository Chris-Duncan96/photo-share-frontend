import React from 'react';
import { render, screen } from '@testing-library/react';
import AlbumComponent from '../../app/components/AlbumComponent';
import Album from '../../app/types/Album';
import Photo from '../../app/types/Photo';

describe('AlbumComponent', () => {
    it('renders each photo in the Album', () => {
        const mockAlbum: Album = {
            albumId: 1,
            photos: [
                { photoId: 1, url: 'http://example.com/photo1.jpg', albumId: 1, title: 'Photo 1' },
                { photoId: 2, url: 'http://example.com/photo2.jpg', albumId: 1, title: 'Photo 2' }
            ]
        };

        render(<AlbumComponent {...mockAlbum} />);

        mockAlbum.photos.forEach((photo: Photo) => {
            const photoElement = screen.getByAltText(photo.title);
            expect(photoElement).toBeInTheDocument();
            expect(photoElement).toHaveAttribute('src', photo.url);
        });
    });
});
