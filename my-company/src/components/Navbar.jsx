import { Link } from 'react-router-dom';

function Navbar() {
  // Inline style object
  const navStyle = {
    backgroundColor: '#333', // navbar background color
    display: 'flex',          // make nav items horizontal
    justifyContent: 'space-between', // space between items
    padding: '1rem',          // spacing inside nav
    color: 'white'            // text color
  };

  const ulStyle = {
    display: 'flex',
    listStyle: 'none',
    gap: '1rem'
  };

  return (
    <nav style={navStyle}>
      <h1>Company</h1>
      <ul style={ulStyle}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
        <li><Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link></li>
        <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
