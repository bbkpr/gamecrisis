import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { Game, Link } from '../api/interfaces';
import { getGameDetails, getGameRelationships } from '../api/gameService';
import ModelGraph from './ModelGraph';

function GameDetails() {
  const { gameId } = useParams<{ gameId: string }>();
  const [game, setGame] = useState<Game | null>(null);
  const [relationships, setRelationships] = useState<Link[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getGameDetails(Number(gameId))
      .then((response) => setGame(response.data))
      .catch((error) => console.log(error));

    getGameRelationships(Number(gameId))
      .then((response) => setRelationships(response.data))
      .catch((error) => console.log(error));
  }, [gameId]);

  const handleNodeClick = (nodeId: number, nodeType: string) => {
    // Handle click on a node (game, character, mechanic, tag, etc.)
    // You can navigate to the corresponding detail page or perform any desired action
    console.log(`Clicked on ${nodeType} with ID ${nodeId}`);
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <Card className="game-details">
      <Card.Body>
        <Card.Title>{game?.title}</Card.Title>
        <Card.Text>{game?.description}</Card.Text>
        {/* Add more game details */}
        <div>
          <strong>Game Relationships:</strong>
          <ModelGraph links={relationships} onNodeClick={handleNodeClick} />
        </div>
        <Button onClick={handleGoBack}>Go Back</Button>
      </Card.Body>
    </Card>
  );
}

export default GameDetails;
