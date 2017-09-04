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
import {HttpClientModule} from '@angular/common/http';
import {ErrorHandlerService} from "./services/error-handler/error.service";
import {ArtistsService} from './services/artists/artists.service';
import {SetTokenComponent} from "./components/setToken-component/set-token.component";
import {BackendService} from "./services/backend/backend.service";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        routedComponents,
        SetTokenComponent
    ],
    providers: [
        AuthService,
        ArtistsService,
        ErrorHandlerService,
        AppResolver,
        {
            provide: Http,
            useFactory: InterceptedHttpFactory,
            deps: [XHRBackend, RequestOptions, AuthService]
        },
        AppGuard,
        BackendService
    ],

    bootstrap: [AppComponent],
})
export class AppModule { }
