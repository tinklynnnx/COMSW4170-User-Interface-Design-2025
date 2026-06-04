import React, { useState, useEffect, useMemo } from 'react';
import { Menu } from 'lucide-react';
import { db } from '../firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { User, MapPin, Clock } from 'lucide-react';
import '../styles/ClubHomeScreen.css';

const ClubHomeScreen = ({ setCurrentScreen, setSelectedEvent }) => {
    return (
        <div className="club-home-screen">
            <div className="screen-padding">
                <div className="header">
                    <h1 className="header-title">Global China Connection</h1>
                    <User className="user-icon" />
                </div>
                <div className="logo-card">
                    <div className="logo-content">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/GCClogo.jpg`}
                            alt="GCC Logo"
                            className="logo-image"
                        />
                    </div>
                </div>
                <div className="club-card">
                    <div className="about-section">
                        <h2 className="section-title">About Us</h2>
                        <p className="about-text">
                            Global China Connection (GCC) is one of the world's largest 
                            nonprofit organization that is entirely student-led and student-managed,
                            comprised of 35+ collegiate chapters across North America. Columbia chapter is led by a group of passionate undergraduates committed
                            to creating a platform for U.S.-China cultural and intellectual
                            exchange.
                        </p>
                        <div className="newsletter-toggle">
                            <span className="toggle-text">Event Newsletter & Articles</span>
                            <div className="toggle-switch">
                                <div className="toggle-slider"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="event-carousel">
                        <div
                            onClick={() => {
                                setSelectedEvent('autumn');
                                setCurrentScreen('newsletter');
                            }}
                            className="event-card clickable"
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/images/Mid-Aut1.JPEG`}
                                alt="Mid-Autumn Festival"
                                className="event-image"
                            />
                            <p className="event-title">2025 Mid-Autumn Festival</p>
                            <p className="event-details1-text">mid autumns is 300+ turn outs,
                                students at Columbia celebrated with food and performances! </p>
                            <button className="read-more-btn">Read More</button>
                        </div>
                        <div className="event-card">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/PastEvent.JPG`}
                                alt="Event"
                                className="event-image"
                            />
                            <p className="event-title">New Student Orientation</p>
                            <p className="event-details1-text">Welcome to Columbia! Come meet Alumni & Undergrads in
                                BJ, SH & SZ before the school year! </p>
                            <button className="read-more-btn">Read More</button>
                        </div>
                    </div>

                <div className="upcoming-section">
                    <div className="upcoming-header">
                        <h2 className="section-title-dark">Upcoming Event</h2>
                        <div className="toggle-switch-blue">
                            <div className="toggle-slider-white"></div>
                        </div>
                    </div>

                    <div className="calendar-widget">
                        <div className="calendar-header">
                            <button className="calendar-nav">&lt;</button>
                            <span className="calendar-month">Mar - 2025</span>
                            <button className="calendar-nav">&gt;</button>
                        </div>
                        <div className="calendar-grid">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                                <div key={day} className="calendar-day-label">{day}</div>
                            ))}
                            {[...Array(31)].map((_, i) => (
                                <div key={i} className={`calendar-day ${i === 6 ? 'selected' : ''}`}>
                                    {i + 1}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        onClick={() => {
                            setSelectedEvent('givethanks');
                            setCurrentScreen('event');
                        }}
                        className="event-details clickable"
                    >
                        <h3 className="event-details-title">GCC GiveThanks Game Night</h3>
                        <p className="event-details-text">
                            Play Mafia, Poker, UNO, and Big 2 Games with GCC members and be
                            provided, come meet new friends!
                        </p>
                        <div className="event-meta">
                            <div className="meta-item">
                                <MapPin className="meta-icon" />
                                <span>Lerner 555</span>
                            </div>
                            <div className="meta-item">
                                <Clock className="meta-icon" />
                                <span>7-10PM</span>
                            </div>
                        </div>
                        <button className="rsvp-btn-center">RSVP</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClubHomeScreen;
