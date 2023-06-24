import React from 'react';

function Footer() {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div>
                <p>&copy; {new Date().getFullYear()} Muras<br/>I do not warrant or assume any legal liability for the quality, reliability, or suitability of any information on this webpage. </p>
            </div>
        </footer>
    );
}

export default Footer;