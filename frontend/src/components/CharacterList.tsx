import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { getCharacters } from '../api/characterService';
import {Character} from "../api/interfaces";

function CharacterList() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    getCharacters()
      .then(response => setCharacters(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <ListGroup>
      {characters.map(character => (
        <ListGroup.Item key={character.id}>
          <p>Name: {character.name}</p>
          <p>Game: {character.game}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default CharacterList;
