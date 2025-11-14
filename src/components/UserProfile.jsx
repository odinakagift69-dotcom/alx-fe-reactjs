function UserProfile(props) {
  const containerStyle = {
    border: '1px solid gray',
    padding: '10px',
    margin: '10px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  };

  const nameStyle = {
    color: 'blue',
    fontSize: '1.5em'
  };

  const ageStyle = {
    fontWeight: 'bold',
    color: 'darkgreen'
  };

  return (
    <div style={containerStyle}>
      <h2 style={nameStyle}>{props.name}</h2>
      <p>Age: <span style={ageStyle}>{props.age}</span></p>
      <p>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;


