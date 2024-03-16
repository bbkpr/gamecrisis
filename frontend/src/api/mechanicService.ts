import axios from 'axios';
import { Mechanic } from './interfaces';

const API_BASE_URL = 'http://localhost:8000/api';

export const getMechanics = () => {
  return axios.get<Mechanic[]>(`${API_BASE_URL}/mechanics/`);
};
