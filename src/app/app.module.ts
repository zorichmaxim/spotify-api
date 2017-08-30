import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';

import { AuthService } from './auth.service';
import { AppResolver } from './app.resolver';

import { Http} from '@angular/http';
import { InterceptedHttpFactory } from './common/interceptedHttpFactory';
import { AppGuard } from './app.guard';

import { ArtistsService } from './artists/artists.service';

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
