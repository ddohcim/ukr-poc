import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SanityService } from 'src/app/services/sanity.service';
import { Movie } from 'src/app/types/movie';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private sanityService: SanityService ) { }

  movies$!: Observable<Movie[]>;

  imageUrl(source: any) {
    return this.sanityService.urlFor(source);
  }

  ngOnInit(): void {
    this.movies$ = this.sanityService.getMovies();
  }
}
