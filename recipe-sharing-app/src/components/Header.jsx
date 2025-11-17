function Header() {
  const headerStyle = {
    backgroundColor: 'navy',
    color: 'white',
    textAlign: 'center',
    padding: '20px'
  };

  return (
    <header style={headerStyle}>
      <h1>My Favorite Cities</h1>
    </header>
  );
}

export default Header;
