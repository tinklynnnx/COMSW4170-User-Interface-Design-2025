import React from 'react';
import { User } from 'lucide-react';
import '../styles/NewsletterScreen.css';

const NewsletterScreen = () => {
    return (
        <div className="newsletter-screen">
            <div className="screen-padding">
                <div className="header">
                    <h1 className="header-title">2025 Mid-Autumn Festival</h1>
                    <User className="user-icon" />
                </div>

                <div className="newsletter-card">
                    <div className="newsletter-hero">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/Mid-Aut1.JPEG`}
                            alt="Mid-Autumn Festival"
                            className="hero-image"
                        />
                    </div>

                    <div className="newsletter-content">
                        <div className="tags">
                            Games • Culture • Community • Gratitude
                        </div>

                        <div className="content-text">
                            <p className="content-paragraph">
                                10月4日，由 GCC Columbia 主办的中秋联欢会 Lerner 555 圆满落幕。
                            </p>
                            <p className="content-paragraph">
                                欢聚带来满室，同声诉说趁暮。真实美好，温暖共享！
                            </p>
                        </div>

                        <div className="content-text">
                            <p className="content-paragraph italic">
                                "让我们一起回忆当晚流光溢彩的美好时刻！"
                            </p>
                            <p className="content-paragraph">
                                On October 4, the Mid-Autumn Festival Gala hosted by GCC
                                Columbia successfully concluded at Lerner 555. Around 350 attendees
                                gathered to celebrate this special holiday with food, games, and
                                performances, feeling the warmth of home even while far away from it.
                            </p>
                        </div>

                        <div className="secondary-image">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/Mid-Aut2.JPEG`}
                                alt="Festival Activity"
                                className="activity-image"
                            />
                        </div>

                        <div className="footer-text">
                            <p>这次联欢会带来了不同的交流空间与体验！</p>
                            <p>一次联欢会上一段一段的音乐，一节一节的回忆</p>
                            <p>从一海路遥到的期待到现在，从一些不能进到宣传的点点滴滴。</p>
                            <p>今分很感谢一个今年的所有台前</p>
                            <p>还有联后各主一要受事都的各位志愿者！</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterScreen;
