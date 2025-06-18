import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="User Avatar"
      />
    </nav>
  );
}

export default Navbar;
