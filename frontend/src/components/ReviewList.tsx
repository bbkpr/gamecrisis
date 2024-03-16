import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { getReviews } from '../api/reviewService';
import {Review} from "../api/interfaces";

function ReviewList() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    getReviews()
      .then(response => setReviews(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <ListGroup>
      {reviews.map(review => (
        <ListGroup.Item key={review.id}>
          <p>Title: {review.title}</p>
          <p>Content: {review.content}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ReviewList;
