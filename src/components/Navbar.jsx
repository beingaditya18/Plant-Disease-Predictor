import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import logo from '/icar-logo.png';

export const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [showLanguageModal, setShowLanguageModal] = useState(false);
    const navbarRef = useRef(null);
    const brandRef = useRef(null);
    const navLinksRef = useRef(null);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setShowLanguageModal(false);
    };

    const languages = [
        { code: 'en', name: 'English', nativeName: 'English' },
        { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' }
    ];

    useEffect(() => {
        // Navbar animation
        gsap.fromTo(
            navbarRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );

        // Brand animation
        gsap.fromTo(
            brandRef.current,
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
        );

        // Nav links animation
        gsap.fromTo(
            navLinksRef.current.children,
            { y: -20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                delay: 0.8
            }
        );

        // Add hover animation to nav links
        const navLinks = navLinksRef.current.children;
        Array.from(navLinks).forEach(link => {
            link.addEventListener('mouseenter', () => {
                gsap.to(link, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            link.addEventListener('mouseleave', () => {
                gsap.to(link, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });
    }, []);

    return (
        <>
            <nav ref={navbarRef} className="navbar navbar-expand-lg navbar-dark bg-success-subtle">
                <div className="container">
                    {/* Logo/Brand - Left */}
                    <a ref={brandRef} className="navbar-brand d-flex align-items-center" href="#home">
                        <img src={logo} alt="ICAR Logo" className="me-2" style={{ width: '40px' }} />
                        <div>
                            <h2 className="mb-0 fs-4">SmartFarm AI</h2>
                            <p className="mb-0 small">Powered by ICAR-NSRI</p>
                        </div>
                    </a>

                    {/* Hamburger Menu Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar Content */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/* Navigation Links - Center */}
                        <ul ref={navLinksRef} className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link text-black text-decoration-underline" href="#home">
                                    <b>{t('nav.home')}</b>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black text-decoration-underline" href="#features">
                                    <b>{t('features.title')}</b>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black text-decoration-underline" href="#diseases">
                                    <b>{t('diseases.title')}</b>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black text-decoration-underline" href="#weather">
                                    <b>{t('weather.title')}</b>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black text-decoration-underline" href="#crops">
                                    <b>{t('crops.title')}</b>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-black text-decoration-underline" href="#contact">
                                    <b>{t('contact.title')}</b>
                                </a>
                            </li>
                        </ul>

                        {/* Language Button - Right */}
                        <button
                            className="btn btn-outline-success"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#languageModal"
                        >
                            <i className="bi bi-translate me-1"></i>
                            {languages.find(lang => lang.code === i18n.language)?.nativeName}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Language Selection Modal */}
            <div
                className="modal fade"
                id="languageModal"
                tabIndex="-1"
                aria-labelledby="languageModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="languageModalLabel">
                                {t('language.title', 'Select Language')}
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="list-group">
                                {languages.map((language) => (
                                    <button
                                        key={language.code}
                                        className={`list-group-item list-group-item-action ${i18n.language === language.code ? 'active' : ''
                                            }`}
                                        onClick={() => changeLanguage(language.code)}
                                        data-bs-dismiss="modal"
                                    >
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <span className="fw-bold">{language.nativeName}</span>
                                                <br />
                                                <small className="text-muted">{language.name}</small>
                                            </div>
                                            {i18n.language === language.code && (
                                                <i className="bi bi-check-circle-fill"></i>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}; 