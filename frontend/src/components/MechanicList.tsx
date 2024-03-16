import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { getMechanics } from '../api/mechanicService';
import {Mechanic} from "../api/interfaces";

function MechanicList() {
  const [mechanics, setMechanics] = useState<Mechanic[]>([]);

  useEffect(() => {
    getMechanics()
      .then(response => setMechanics(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <ListGroup>
      {mechanics.map(mechanic => (
        <ListGroup.Item key={mechanic.id}>
          <p>Name: {mechanic.name}</p>
          <p>Game: {mechanic.game}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default MechanicList;
