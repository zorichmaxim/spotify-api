import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, RequestOptions, XHRBackend} from '@angular/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule, routedComponents} from './routing/app-routing.module';

import {AuthService} from './services/auth/auth.service';
import {AppResolver} from './interceptors/app.resolver';

import {Http} from '@angular/http';
import {InterceptedHttpFactory} from './interceptors/interceptedHttpFactory';
import {AppGuard} from './guards/app/app.guard';

import { ArtistsService } from './components/artists/artists.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        routedComponents
    ],
    providers: [
        AuthService,
        ArtistsService,
        AppResolver,
        {
            provide: Http,
            useFactory: InterceptedHttpFactory,
            deps: [XHRBackend, RequestOptions, AuthService]
        },
        AppGuard
    ],

    bootstrap: [AppComponent],
})
export class AppModule { }
