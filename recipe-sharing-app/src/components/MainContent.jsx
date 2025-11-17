function MainContent() {
  const mainStyle = {
    padding: '20px',
    backgroundColor: '#eef',
    minHeight: '200px',
    textAlign: 'center'
  };

  const textStyle = {
    color: '#333',
    fontSize: '18px'
  };

  return (
    <main style={mainStyle}>
      <h2 style={{ color: 'darkblue' }}>Welcome to My Travel Page</h2>
      <p style={textStyle}>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}

export default MainContent;


