import React from 'react';
import './LoadingScreen.css';

const LoadingScreen: React.FC = () => {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading...</p>
        </div>
    );
};

export default LoadingScreen;
