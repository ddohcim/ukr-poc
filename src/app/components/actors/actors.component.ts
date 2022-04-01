import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { SanityService } from 'src/app/services/sanity.service';
import { Actor } from 'src/app/types/actor';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  constructor(private sanityService: SanityService) { }

  actors$!: Observable<Actor[]>;

  defaultImageURL =
  "https://images.vexels.com/media/users/3/140384/isolated/preview/fa2513b856a0c96691ae3c5c39629f31-girl-profile-avatar-1-by-vexels.png";

  imageUrl(source: any) {
    return source ? this.sanityService.urlFor(source) : this.defaultImageURL;
  }

  ngOnInit(): void {
    this.actors$ = this.sanityService.getActors();
  }

}
