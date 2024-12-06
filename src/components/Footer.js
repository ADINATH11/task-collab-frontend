// src/components/Footer.js
import './Footer.css';

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Task Collaboration System. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
