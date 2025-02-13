import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Photos from '../../app/components/Photos';
import Album from '../../app/types/Album';

describe('Photos', () => {

    const albums: Album[] = [
        { albumId: 1, photos: [] },
        { albumId: 2, photos: [] },
        { albumId: 3, photos: [] },
    ];

    it('renders each album', () => {
        render(<Photos albums={albums} />);

        expect(screen.queryByText('Album 1')).toBeInTheDocument();
        expect(screen.getByText('Album 2')).toBeInTheDocument();
        expect(screen.queryByText('Album 3')).toBeInTheDocument();
    });

    it('filters by albumId when the albumId search field is updated', () => {
        render(<Photos albums={albums} />);

        const searchInput = screen.getByLabelText('Search by Album ID');

        fireEvent.change(searchInput, { target: { value: '2' } });

        expect(screen.getByText('Album 2')).toBeInTheDocument();
        expect(screen.queryByText('Album 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Album 3')).not.toBeInTheDocument();
    });

    it('deletes the albumId filter when PhotoId filter is entered', async () => {
        render(<Photos albums={albums} />);

        const albumSearchInput = screen.getByLabelText('Search by Album ID');
        fireEvent.change(albumSearchInput, { target: { value: '2' } });

        await waitFor(() => expect(screen.getByText('Album 2')).toBeInTheDocument());

        const photoSearchInput = screen.getByLabelText('Search by Photo ID');
        fireEvent.change(photoSearchInput, { target: { value: '1' } });

        await waitFor(() => expect(albumSearchInput).toHaveValue(''));
    });

    it('clears photoId filter when albumId is entered', async () => {
        render(<Photos albums={albums} />);

        const photoSearchInput = screen.getByLabelText('Search by Photo ID');
        fireEvent.change(photoSearchInput, { target: { value: '1' } });

        const albumSearchInput = screen.getByLabelText('Search by Album ID');
        fireEvent.change(albumSearchInput, { target: { value: '2' } });

        await waitFor(() => expect(photoSearchInput).toHaveValue(''));
    });
});
