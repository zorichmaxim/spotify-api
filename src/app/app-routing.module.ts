import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ArtistsComponent} from './artists/artists.component';
import {AppResolver} from './app.resolver';
import {SetTokenComponent} from "./setToken/set-token.component";
import {AppGuard} from './app.guard';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: 'set-token',
        component: SetTokenComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        resolve: {
            appResolver: AppResolver
        },
        canActivate: [AppGuard]
    },
    {
        path: 'artists/:search',
        component: ArtistsComponent,
        resolve: {
            appResolver: AppResolver
        },
        canActivate: [AppGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routedComponents = [HomeComponent, ArtistsComponent, SetTokenComponent];
