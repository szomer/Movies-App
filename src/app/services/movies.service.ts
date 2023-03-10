import { Injectable } from '@angular/core';

// service for performing http requests
import { HttpClient } from '@angular/common/http';

// rxjs: Reactive Extenstions library for JS
// used for dealing with events and integration points
// comes with angular
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  Credits,
  Images,
  Movie,
  MovieDto,
  MovieVideoDto,
} from '../models/Movie';
import { GenreDto } from '../models/Genre';

@Injectable({
  providedIn: 'root',
})
// MovieService will be public, accessable from anywhere
export class MoviesService {
  // URL properties
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'f749497778bc4747db38d41674f31bd5';

  // Instance of HttpClient with the name 'http'
  constructor(private http: HttpClient) {}

  // Get movies of category
  getMovies(route: string = 'popular', count: number = 12) {
    // use the http instance for requests
    // returns the first 20 movies of the response
    // of -> creates an observable
    return this.http
      .get<MovieDto>(`${this.baseUrl}/movie/${route}?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  // Get movies of page
  getSearchedMovies(page: number = 1, searchValue?: string) {
    const uri = searchValue ? '/search/movie' : '/movie/popular';

    return this.http
      .get<MovieDto>(
        `${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  // Get similar movies of movie
  getSimilarMovies(id: string, count = 12) {
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  // Get movies of genre
  getMoviesByGenre(id: string, pageNumber: number) {
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}/discover/movie?with_genres=${id}&page=${pageNumber}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  // Get movie
  getMovie(id: string) {
    return this.http.get<Movie>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`
    );
  }

  // Get videos of movie
  getMovieVideos(id: string) {
    return this.http
      .get<MovieVideoDto>(
        `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  // Get images of movie
  getMovieImages(id: string) {
    return this.http.get<Images>(
      `${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`
    );
  }

  // Get credits of movie
  getMovieCredits(id: string) {
    return this.http.get<Credits>(
      `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`
    );
  }

  // Get genres
  getGenres() {
    return this.http
      .get<GenreDto>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.genres);
        })
      );
  }
}
