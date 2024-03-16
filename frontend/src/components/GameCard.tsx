import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Game } from '../api/interfaces';

interface GameCardProps {
  game: Game;
  onSelect: (game: Game) => void;
  isSelected: boolean;
}

function GameCard({ game, onSelect, isSelected }: GameCardProps) {
  return (
    <Card
      className={`game-card ${isSelected ? 'highlighted' : ''}`}
      onClick={() => onSelect(game)}
    >
      <Card.Body>
        <Card.Title>{game.title}</Card.Title>
        <Card.Text>{game.description}</Card.Text>
        <Link to={`/games/${game.id}`}>View Details</Link>
      </Card.Body>
    </Card>
  );
}

export default GameCard;