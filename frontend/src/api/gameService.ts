import axios from 'axios';
import { Game, RatingSummary, RelatedGame, Link } from './interfaces';

const API_BASE_URL = 'http://localhost:8000/api';

export const getGames = () => {
  return axios.get<Game[]>(`${API_BASE_URL}/games/`);
};

export const getGameDetails = (gameId: number) => {
  return axios.get<Game>(`${API_BASE_URL}/games/${gameId}/`);
};

export const getGameRatingSummary = (gameId: number) => {
  return axios.get<RatingSummary>(`${API_BASE_URL}/games/${gameId}/rating-summary/`);
};

export const getRelatedGames = (gameId: number) => {
  return axios.get<RelatedGame[]>(`${API_BASE_URL}/games/${gameId}/related-games/`);
};

export const getGameRelationships = (gameId: number) => {
  return axios.get<Link[]>(`${API_BASE_URL}/games/${gameId}/relationships/`);
};
