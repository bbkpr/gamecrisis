import axios from 'axios';
import { Playthrough } from './interfaces';

const API_BASE_URL = 'http://localhost:8000/api';

export const getPlaythroughs = () => {
  return axios.get<Playthrough[]>(`${API_BASE_URL}/playthroughs/`);
};
