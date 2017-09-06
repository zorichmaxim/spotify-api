import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public searchText: string = '';

  constructor(public router: Router) {}

  public searchArtist(): void {
    this.router.navigate(['artists', this.searchText])
  }
}
