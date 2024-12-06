// src/components/Header.js
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-container">
        <img
          src="Google Tasks.png" // Replace with the actual logo path
          alt="App Logo"
          className="app-logo"
        />
        <h1 className="app-name">Task Collaboration System</h1>
      </div>
    </header>
  );
};

export default Header;
