import { Item } from './Item';

// Movie DTO
export interface MovieDto {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

// Movie
export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue: number;
  runtime: number;
  status: string;
  genres: Genre[];
}

// Videos of Movie
export interface MovieVideoDto {
  id: number;
  results: Video[];
}

// Video
export interface Video {
  site: string;
  key: string;
}

// Images of Movie
export interface Images {
  backdrops: {
    file_path: string;
  }[];
}

// Credits of Movie
export interface Credits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}

// Genre of Movie
export interface Genre {
  id: number;
  name: String;
}

export const mapMovieToItem = (movie: Movie): Item => {
  return {
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
    vote_average: movie.vote_average,
    backdrop_path: movie.backdrop_path,
    vote_count: movie.vote_count,
    release_date: movie.release_date,
    overview: movie.overview,
    routePath: '/movie/' + movie.id,
  };
};
