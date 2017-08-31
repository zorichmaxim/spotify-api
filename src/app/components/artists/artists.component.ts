import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArtistsService} from "./artists.service";

@Component({
    selector: 'artists',
    templateUrl: './artists.component.html',
    styleUrls: ['./artists.component.css']
})
export class ArtistsComponent {

    public artists: Array<any>;
    public searched: string;
    public searchText: string = '';


    constructor(public route: ActivatedRoute,
                public artistsService: ArtistsService,
                public router: Router) {
    }

    private ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.searched = params.search;
                this.search(params.search)
            }
        )
    }

   public search(search: string): void{
        this.artistsService.searchArtist(search)
            .map(response => response.json())
            .subscribe(
                response => {
                    this.artists = response.artists.items;
                }
            )
    }

    public searchArtist(): void {
        this.router.navigate(['artists', this.searchText])
    }

}