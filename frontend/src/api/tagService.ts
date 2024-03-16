import axios from 'axios';
import { Tag } from './interfaces';

const API_BASE_URL = 'http://localhost:8000/api';

export const getTags = () => {
  return axios.get<Tag[]>(`${API_BASE_URL}/tags/`);
};
