import React from 'react';
import { Home } from 'lucide-react';
import '../styles/BottomNav.css';

const BottomNav = ({ currentScreen, setCurrentScreen }) => {
    return (
        <div className="bottom-nav">
            <div className="nav-container">
                <button
                    onClick={() => setCurrentScreen('clubs-list')}
                    className="nav-button"
                >
                    <span className="nav-text">Clubs</span>
                    {currentScreen === 'clubs-list' && <div className="nav-underline"></div>}
                </button>
                <button
                    onClick={() => setCurrentScreen('clubs-list')}
                    className="nav-button"
                >
                    <Home className={`nav-icon ${currentScreen === 'clubs-list' ? 'active' : ''}`} />
                </button>
                <button 
                    onClick={() => setCurrentScreen('events-feed')}
                    className="nav-button"
                >
                    <span className="nav-text">Events</span>
                    {currentScreen === 'events-feed' && <div className="nav-underline"></div>}
                </button>
            </div>
        </div>
    );
};

export default BottomNav;