import { from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import sanityClient from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";
import { Actor } from '../types/actor';
import { Movie } from '../types/movie';

@Injectable({
  providedIn: 'root'
})
export class SanityService {

  constructor() { }

  sanityClientCredentials = {
    option: sanityClient({
      projectId: "eefg2pox",
      dataset: "production"
    })
  }

  urlFor = (source: any) =>
  imageUrlBuilder(this.sanityClientCredentials.option).image(source);

  async fetchMovies(): Promise<Movie[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "movie"]{
        _id,
        title,
        overview,
        releaseDate,
        poster
      }`
    );
  }


  async fetchActors(): Promise<Actor[]> {
    return await this.sanityClientCredentials.option.fetch(
      `*[_type == "person"]{
        _id,
        name,
        image
      }`
    );
  }

  getMovies(): Observable<Movie[]> {
    return from(this.fetchMovies());
  }

  getActors(): Observable<Actor[]> {
    return from(this.fetchActors());
  }
}
