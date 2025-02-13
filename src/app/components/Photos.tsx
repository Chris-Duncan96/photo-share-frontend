"use client";

import React, { useState, useEffect } from 'react';

const Photos: React.FC = () => {
    const [data, setData] = useState<any>(null);
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

    return (
        <div>
            <h2>Fetched Data:</h2>
            {error ? (
                <p style={{ color: 'red' }}>Error: {error}</p>
            ) : (
                <pre>{JSON.stringify(data, null, 2)}</pre>
            )}
        </div>
    );
};

export default Photos;
