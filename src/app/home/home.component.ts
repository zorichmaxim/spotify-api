import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public searchText: string = '';

  constructor(
    public authService: AuthService,
    public router: Router
  ) {}

  public searchArtist(): void {
    this.router.navigate(['artists', this.searchText])
  }
}
