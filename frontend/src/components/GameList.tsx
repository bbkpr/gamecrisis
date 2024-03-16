import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { getGames } from '../api/gameService';
import GameCard from './GameCard';
import GameDetails from './GameDetails';
import {Game} from "../api/interfaces";

function GameList() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  useEffect(() => {
    getGames()
      .then(response => setGames(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleGameSelect = (game: Game) => {
    setSelectedGame(game);
  };

  return (
    <Row>
      <Col md={8}>
        <Row>
          {games.map(game => (
            <Col key={game.id} md={6} className="mb-4">
              <GameCard
                game={game}
                onSelect={handleGameSelect}
                isSelected={selectedGame?.id === game.id}
              />
            </Col>
          ))}
        </Row>
      </Col>
      <Col md={4}>
        {selectedGame && <GameDetails />}
      </Col>
    </Row>
  );
}

export default GameList;