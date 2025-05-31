import React from 'react';
import './Privacy.css'; // Ensure you create this CSS file

const Privacy = () => {
    return (
        <div id="privacy-container">
            <header id="privacy-header">
                <h1>Privacy Policy</h1>
                <p>Your privacy is important to us. This privacy policy outlines how we collect, use, and protect your information.</p>
            </header>

            <div id="information-collection">
                <h2>Information We Collect</h2>
                <ul>
                    <li>Personal Information: Name, Email, etc.</li>
                    <li>Usage Data: How you interact with our website.</li>
                </ul>
            </div>

            <div id="information-use">
                <h2>How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul>
                    <li>Provide and maintain our services.</li>
                    <li>Notify you about changes to our services.</li>
                    <li>Allow you to participate in interactive features.</li>
                </ul>
            </div>

            <div id="information-protection">
                <h2>Information Protection</h2>
                <p>We take the security of your information seriously and use various measures to protect it.</p>
            </div>

            <footer id="privacy-footer">
                <p>&copy; 2024 Art Class. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Privacy;
