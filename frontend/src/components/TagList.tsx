import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { getTags } from '../api/tagService';
import {Tag} from "../api/interfaces";

function TagList() {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    getTags()
      .then(response => setTags(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <ListGroup>
      {tags.map(tag => (
        <ListGroup.Item key={tag.id}>
          <p>Name: {tag.name}</p>
          <p>Weight: {tag.weight}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TagList;
