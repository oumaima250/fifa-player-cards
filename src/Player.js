import React from 'react';
import Card from 'react-bootstrap/Card';

// const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
const Player = (props) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={props.imageUrl} alt={props.name}  style={{height : "200px", width : "100%", objectFit : "contain"}}/>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Team: {props.team}<br />
          Nationality: {props.nationality}<br />
          Jersey Number: {props.jerseyNumber}<br />
          Age: {props.age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: 'Unknown',
  team: 'Unknown',
  nationality: 'Unknown',
  jerseyNumber: 0,
  age: 0,
  imageUrl: '',
};

export default Player;