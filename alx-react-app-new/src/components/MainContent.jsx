// MainContent.jsx
import React from 'react';

function MainContent() {
  return (
    <main style={{
      padding: '20px',
      backgroundColor: '#f0f8ff',
      color: '#333',
      lineHeight: '1.6',
      textAlign: 'justify',
      borderRadius: '5px',
      margin: '10px'
    }}>
      <h2 style={{ textAlign: 'center', color: 'darkred' }}>Welcome to My City List</h2>
      <p>Here you can find a curated list of my favorite cities around the world and what makes them special.</p>
    </main>
  );
}

export default MainContent;
