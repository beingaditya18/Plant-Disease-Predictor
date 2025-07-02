import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const footerRef = useRef(null);
    const footerContentRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Footer entrance animation
        gsap.fromTo(footerRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Animate footer content
        gsap.fromTo(footerContentRef.current.children,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse"
                }
            }
        );

        // Add hover animation to footer links
        const footerLinks = footerRef.current.querySelectorAll('a');
        footerLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                gsap.to(link, {
                    x: 5,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            link.addEventListener('mouseleave', () => {
                gsap.to(link, {
                    x: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });
    }, []);

    return (
        <footer ref={footerRef} className="bg-dark text-light py-5 mt-5">
            <div ref={footerContentRef} className="container">
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6">
                        <h3 className="h5 text-success mb-3">SmartFarm AI</h3>
                        <p>Powered by ICAR-IISR</p>
                        <p>Khandwa Road, Indore - 452001</p>
                        <p>Madhya Pradesh, India</p>
                        <div className="mt-3">
                            <p className="mb-2"><i className="bi bi-telephone-fill me-2"></i>+91-731-2479306</p>
                            <p><i className="bi bi-envelope-fill me-2"></i>support@smartfarm.ai</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h3 className="h5 text-success mb-3">Quick Links</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#home" className="text-light text-decoration-none">Home</a></li>
                            <li className="mb-2"><a href="#features" className="text-light text-decoration-none">Features</a></li>
                            <li className="mb-2"><a href="#diseases" className="text-light text-decoration-none">Disease ID</a></li>
                            <li className="mb-2"><a href="#weather" className="text-light text-decoration-none">Weather</a></li>
                            <li className="mb-2"><a href="#crops" className="text-light text-decoration-none">Crop Guide</a></li>
                            <li><a href="#contact" className="text-light text-decoration-none">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h3 className="h5 text-success mb-3">Resources</h3>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#blog" className="text-light text-decoration-none">Blog</a></li>
                            <li className="mb-2"><a href="#faq" className="text-light text-decoration-none">FAQ</a></li>
                            <li className="mb-2"><a href="#support" className="text-light text-decoration-none">Support</a></li>
                            <li className="mb-2"><a href="#api" className="text-light text-decoration-none">API Docs</a></li>
                            <li><a href="#download" className="text-light text-decoration-none">Download App</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h3 className="h5 text-success mb-3">Connect With Us</h3>
                        <div className="d-flex gap-3 mb-3">
                            <a href="#" className="text-light"><i className="bi bi-facebook fs-4"></i></a>
                            <a href="#" className="text-light"><i className="bi bi-twitter-x fs-4"></i></a>
                            <a href="#" className="text-light"><i className="bi bi-linkedin fs-4"></i></a>
                            <a href="#" className="text-light"><i className="bi bi-instagram fs-4"></i></a>
                        </div>
                        <p className="small">Subscribe to our newsletter for updates and farming tips.</p>
                        <div className="input-group">
                            <input type="email" className="form-control" placeholder="Your email" />
                            <button className="btn btn-success">Subscribe</button>
                        </div>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="mb-0">&copy; {currentYear} SmartFarm AI. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <a href="#privacy" className="text-light text-decoration-none me-3">Privacy Policy</a>
                        <a href="#terms" className="text-light text-decoration-none me-3">Terms of Service</a>
                        <a href="#sitemap" className="text-light text-decoration-none">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}; 