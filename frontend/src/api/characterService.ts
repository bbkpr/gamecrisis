import axios from 'axios';
import { Character } from './interfaces';

const API_BASE_URL = 'http://localhost:8000/api';

export const getCharacters = () => {
  return axios.get<Character[]>(`${API_BASE_URL}/characters/`);
};
