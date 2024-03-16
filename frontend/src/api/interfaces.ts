export interface Game {
  id: number;
  title: string;
  description: string;
  // Add other game properties
}

export interface RatingSummary {
  average: number;
  count: number;
}

export interface RelatedGame {
  id: number;
  title: string;
}

export interface Link {
  source: any;
  target: any;
}

export interface Node {
  id: number;
  name: string;
  type: string;
}

export interface Character {
  id: number;
  name: string;
  game: number;
  // Add other character properties
}

export interface Mechanic {
  id: number;
  name: string;
  game: number;
  // Add other mechanic properties
}

export interface Tag {
  id: number;
  name: string;
  weight: number;
}

export interface Review {
  id: number;
  user: number;
  game: number;
  title: string;
  content: string;
  // Add other review properties
}

export interface Playthrough {
  id: number;
  user: number;
  game: number;
  start_date: string;
  end_date: string;
  status: string;
}
