import axios from 'axios';
import { Review } from './interfaces';

const API_BASE_URL = 'http://localhost:8000/api';

export const getReviews = () => {
  return axios.get<Review[]>(`${API_BASE_URL}/reviews/`);
};
