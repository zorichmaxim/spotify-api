import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {BackendService} from "../backend/backend.service";

@Injectable()
export class ArtistsService {

    constructor(private backend: BackendService){}

    private searchArtistUrl: string = '/search';

    public searchArtist(artist: string) : Observable<any>  {
        let requestOptions = {
            from : 'search',
            query : artist,
            type : 'artist'
        };
        return this.backend.get(this.searchArtistUrl, requestOptions);
    }
}
