import React, { useState } from 'react';
import ClubHomeScreen from './components/ClubHomeScreen';
import NewsletterScreen from './components/NewsletterScreen';
import EventScreen from './components/EventScreen';
import BottomNav from './components/BottomNav';
import ClubListScreen from './components/ClubListScreen';
import CampusFeedPage from './components/CampusFeedPage';
import PostEventPage from './components/PostEventPage';
import './styles/App.css';

const App = () => {
    const [currentScreen, setCurrentScreen] = useState('clubs-list');
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedClub, setSelectedClub] = useState(null);

    return (
        <div className="app-container">
            <div className="iphone-frame">
                <div className="notch"></div>

                <div className="screen-content">
                    <div className="status-bar">
                        <span className="time">9:41</span>
                        <div className="status-icons">
                            <div className="battery-icon">
                                <div className="battery-tip"></div>
                            </div>
                        </div>
                    </div>

                    <div className="main-content">
                        {currentScreen === 'clubs-list' && (
                            <ClubListScreen 
                                setCurrentScreen={setCurrentScreen}
                                setSelectedClub={setSelectedClub}
                            />
                        )}
                        {currentScreen === 'club' && (
                            <ClubHomeScreen
                                setCurrentScreen={setCurrentScreen}
                                setSelectedEvent={setSelectedEvent}
                            />
                        )}
                        {currentScreen === 'newsletter' && <NewsletterScreen />}
                        {currentScreen === 'event' && <EventScreen />}
                        {currentScreen === 'events-feed' && (
                            <CampusFeedPage 
                                onGoToPost={() => setCurrentScreen('post-event')}
                                setCurrentScreen={setCurrentScreen}
                            />
                        )}
                        {currentScreen === 'post-event' && (
                            <PostEventPage 
                                onGoToEvents={() => setCurrentScreen('events-feed')}
                            />
                        )}
                        <BottomNav currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
