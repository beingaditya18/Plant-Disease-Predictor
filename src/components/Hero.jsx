import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
import '../i18n';

export const Hero = () => {
    const { t } = useTranslation();
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonsRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Hero section animation
        const heroTimeline = gsap.timeline();
        heroTimeline
            .fromTo(titleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
            )
            .fromTo(subtitleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
                "-=0.6"
            )
            .fromTo(descriptionRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
                "-=0.6"
            )
            .fromTo(buttonsRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
                "-=0.6"
            )
            .fromTo(imageRef.current,
                { x: 50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
                "-=0.6"
            );

        // Add hover animations to buttons
        const buttons = buttonsRef.current.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                gsap.to(button, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            button.addEventListener('mouseleave', () => {
                gsap.to(button, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        // Features section animation with hover effects
        gsap.fromTo(".feature-card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#features",
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Add hover animations to feature cards
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    y: -10,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    y: 0,
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        // Disease section animation with hover effects
        gsap.fromTo("#diseases .col-lg-6",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#diseases",
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Add hover animations to disease section buttons
        const diseaseButtons = document.querySelectorAll("#diseases .btn");
        diseaseButtons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                gsap.to(button, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            button.addEventListener('mouseleave', () => {
                gsap.to(button, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        // Weather section animation with hover effects
        gsap.fromTo("#weather .card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#weather",
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Add hover animations to weather cards
        const weatherCards = document.querySelectorAll("#weather .card");
        weatherCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    y: -10,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    y: 0,
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        // Crop guide section animation with hover effects
        gsap.fromTo("#crops .card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#crops",
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Add hover animations to crop cards
        const cropCards = document.querySelectorAll("#crops .card");
        cropCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    y: -10,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    y: 0,
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <main ref={heroRef}>
            {/* Hero Section */}
            <section id="home" className="py-5 bg-light" style={{ paddingTop: '80px' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 ref={titleRef} className="display-4 fw-bold text-success mb-3">
                                {t('hero.title')}
                            </h1>
                            <p ref={subtitleRef} className="lead text-success mb-3">
                                {t('hero.subtitle')}
                            </p>
                            <p ref={descriptionRef} className="mb-4">
                                {t('hero.description')}
                            </p>
                            <div ref={buttonsRef} className="d-flex gap-3">
                                <a href="#features" className="btn btn-success">
                                    {t('hero.buttons.explore')}
                                </a>
                                <a href="#diseases" className="btn btn-outline-success">
                                    {t('hero.buttons.tryDisease')}
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img
                                ref={imageRef}
                                src="https://placehold.co/600x400.png"
                                alt="Smart Farming"
                                className="img-fluid rounded-3"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-5">
                <div className="container">
                    <h2 className="text-center text-success mb-5">{t('features.title')}</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 border-success feature-card">
                                <div className="card-body text-center">
                                    <i className="bi bi-camera display-4 text-success mb-3"></i>
                                    <h3 className="h5">{t('features.disease.title')}</h3>
                                    <p>{t('features.disease.description')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-success feature-card">
                                <div className="card-body text-center">
                                    <i className="bi bi-cloud-sun display-4 text-success mb-3"></i>
                                    <h3 className="h5">{t('features.weather.title')}</h3>
                                    <p>{t('features.weather.description')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-success feature-card">
                                <div className="card-body text-center">
                                    <i className="bi bi-flower3 display-4 text-success mb-3"></i>
                                    <h3 className="h5">{t('features.crop.title')}</h3>
                                    <p>{t('features.crop.description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Disease Identification Section */}
            <section id="diseases" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center text-success mb-5">{t('diseases.title')}</h2>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img
                                src="https://placehold.co/600x400.png"
                                alt="Disease Identification"
                                className="img-fluid rounded-3 mb-4 mb-lg-0"
                            />
                        </div>
                        <div className="col-lg-6">
                            <h3 className="text-success mb-4">{t('diseases.subtitle')}</h3>
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    {t('diseases.features.upload')}
                                </li>
                                <li className="mb-3">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    {t('diseases.features.info')}
                                </li>
                                <li className="mb-3">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    {t('diseases.features.treatment')}
                                </li>
                                <li className="mb-3">
                                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    {t('diseases.features.prevention')}
                                </li>
                            </ul>
                            <button className="btn btn-success">{t('diseases.button')}</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Weather Section */}
            <section id="weather" className="py-5">
                <div className="container">
                    <h2 className="text-center text-success mb-5">{t('weather.title')}</h2>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="card border-success h-100">
                                <div className="card-body">
                                    <h3 className="h5 text-success mb-3">{t('weather.realtime.title')}</h3>
                                    <img
                                        src="https://placehold.co/600x300.png"
                                        alt="Weather Forecast"
                                        className="img-fluid rounded mb-3"
                                    />
                                    <p>{t('weather.realtime.description')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card border-success h-100">
                                <div className="card-body">
                                    <h3 className="h5 text-success mb-3">{t('weather.advisory.title')}</h3>
                                    <ul className="list-unstyled">
                                        <li className="mb-2">
                                            <i className="bi bi-calendar-check text-success me-2"></i>
                                            {t('weather.advisory.items.planting')}
                                        </li>
                                        <li className="mb-2">
                                            <i className="bi bi-droplet text-success me-2"></i>
                                            {t('weather.advisory.items.irrigation')}
                                        </li>
                                        <li className="mb-2">
                                            <i className="bi bi-shield-check text-success me-2"></i>
                                            {t('weather.advisory.items.pest')}
                                        </li>
                                        <li className="mb-2">
                                            <i className="bi bi-sun text-success me-2"></i>
                                            {t('weather.advisory.items.harvest')}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Crop Guide Section */}
            <section id="crops" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center text-success mb-5">{t('crops.title')}</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 border-success">
                                <img src="https://placehold.co/600x400.png" className="card-img-top" alt="Crop Planning" />
                                <div className="card-body">
                                    <h3 className="h5 text-success">{t('crops.selection.title')}</h3>
                                    <p>{t('crops.selection.description')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-success">
                                <img src="https://placehold.co/600x400.png" className="card-img-top" alt="Growing Guide" />
                                <div className="card-body">
                                    <h3 className="h5 text-success">{t('crops.guide.title')}</h3>
                                    <p>{t('crops.guide.description')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-success">
                                <img src="https://placehold.co/600x400.png" className="card-img-top" alt="Market Insights" />
                                <div className="card-body">
                                    <h3 className="h5 text-success">{t('crops.market.title')}</h3>
                                    <p>{t('crops.market.description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-5">
                <div className="container">
                    <h2 className="text-center text-success mb-5">{t('contact.title')}</h2>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card border-success">
                                <div className="card-body">
                                    <form>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder={t('contact.form.name')} required />
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" className="form-control" placeholder={t('contact.form.email')} required />
                                        </div>
                                        <div className="mb-3">
                                            <textarea className="form-control" rows="5" placeholder={t('contact.form.message')} required></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-success">{t('contact.form.submit')}</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}; 