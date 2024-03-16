import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { getPlaythroughs } from '../api/playthroughService';
import {Playthrough} from "../api/interfaces";

function PlaythroughList() {
  const [playthroughs, setPlaythroughs] = useState<Playthrough[]>([]);

  useEffect(() => {
    getPlaythroughs()
      .then(response => setPlaythroughs(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <ListGroup>
      {playthroughs.map(playthrough => (
        <ListGroup.Item key={playthrough.id}>
          <p>User: {playthrough.user}</p>
          <p>Game: {playthrough.game}</p>
          <p>Start Date: {playthrough.start_date}</p>
          <p>End Date: {playthrough.end_date}</p>
          <p>Status: {playthrough.status}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default PlaythroughList;
