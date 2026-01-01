
export interface Product {
  id: string;
  name: string;
  price: number;
  origin: string;
  flush: string;
  notes: string[];
  image: string;
  bestSeller?: boolean;
  category: string;
}

export interface Region {
  id: string;
  name: string;
  state: string;
  established: string;
  description: string;
  elevation: string;
  harvest: string;
  tags: string[];
  image: string;
  coordinates: { x: string; y: string };
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}
