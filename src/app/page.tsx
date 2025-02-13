"use client";

import Album from './types/Album';
import React, { useState, useEffect } from 'react';
import Photos from './components/Photos';
import LoadingScreen from './components/LoadingScreen';

export default function Home() {
    const [albums, setData] = useState<Album[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://env-6.eba-3pnfx2mm.us-east-2.elasticbeanstalk.com/albums");
                const json = await response.json();
                setData(json);
            } catch (error) {
                setError((error as Error).message);
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!albums) {
        return <LoadingScreen />;
    }

    albums.sort((a, b) => a.albumId - b.albumId);

    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div>
            <Photos albums={albums} />
          </div>
        </main>
      </div>
    );
}
