"use client";

import React, { useState, useEffect } from 'react';
import Album from '../types/Album';
import AlbumComponent from './AlbumComponent';
import TextField from '@mui/material/TextField';

type AlbumProps = {
    albums: Album[];
};

const Photos: React.FC<AlbumProps> = ({ albums }) => {
    const [searchAlbumId, setSearchAlbumId] = useState('');
    const [searchPhotoId, setSearchPhotoId] = useState('');
    const [filteredAlbums, setFilteredAlbums] = useState(albums);

    useEffect(() => {
        if (searchAlbumId) {
            setSearchPhotoId('');
            setFilteredAlbums(
                albums.filter(album => 
                    album.albumId.toString().includes(searchAlbumId)
                )
            );
        } else if (searchPhotoId) {
            setFilteredAlbums(albums);
        } else {
            setFilteredAlbums(albums);
        }
    }, [searchAlbumId, searchPhotoId, albums]);

    const handleAlbumSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchAlbumId(event.target.value);
        setSearchPhotoId('');
    };

    const handlePhotoSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchPhotoId(event.target.value);
        setSearchAlbumId('');
    }

    return (
        <div >
            <div className="flex justify-center">
                <div className="flex items-center gap-4">
                    <TextField 
                        id="outlined-search-album" 
                        label="Search by Album ID" 
                        type="search" 
                        value={searchAlbumId}
                        onChange={handleAlbumSearchChange}
                    />
                    <span>- or -</span>
                    <TextField 
                        id="outlined-search-photo" 
                        label="Search by Photo ID" 
                        type="search" 
                        value={searchPhotoId}
                        onChange={handlePhotoSearchChange}
                    />
                </div>
            </div>
            {filteredAlbums.map(album => (
                <AlbumComponent key={album.albumId} album={album} photoIdFilter={searchPhotoId} />
            ))}
        </div>
    );
};

export default Photos;
