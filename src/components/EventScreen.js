import React from 'react';
import { User, MapPin, Clock } from 'lucide-react';
import '../styles/EventScreen.css';

const EventScreen = () => {
    return (
        <div className="event-screen">
            <div className="screen-padding">
                <div className="header">
                    <h1 className="header-title">GiveThanks Game Night</h1>
                    <User className="user-icon" />
                </div>

                <div className="event-card-main">
                    <div className="event-hero">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/GiveThanks.JPG`}
                            alt="Game Night"
                            className="hero-image"
                        />
                    </div>

                    <div className="tags">
                        Games • Culture • Community • Gratitude
                    </div>

                    <div className="event-description">
                        <p>
                            Join GCC for GiveThanks Game Night, a Thanksgiving-themed
                            gathering celebrating our community together for a night of fun,
                            laughter, and friendship! Enjoy a variety of games including Mafia,
                            competitive and a welcoming social atmosphere with fellow members.
                            This was hosted and supported by GCC to bring together students
                            from diverse backgrounds to connect, unwind, and celebrate the
                            season with GCC!
                        </p>
                    </div>

                    <div className="event-info-box">
                        <div className="info-item">
                            <MapPin className="info-icon" />
                            <span className="info-text">Lerner 555</span>
                        </div>
                        <div className="info-item">
                            <Clock className="info-icon" />
                            <span className="info-text">7-10PM</span>
                        </div>
                    </div>

                    <div className="registration-form">
                        <div className="form-group">
                            <label className="form-label">Your Name</label>
                            <input
                                type="text"
                                placeholder="FirstName LastName"
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Your Email</label>
                            <input
                                type="email"
                                placeholder="UNIXXX@Columbia.edu"
                                className="form-input"
                            />
                        </div>

                        <button className="submit-btn">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventScreen;
