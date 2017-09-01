import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from '../components/home/home.component';
import {ArtistsComponent} from '../components/artists/artists.component';
import {AppResolver} from '../interceptors/app.resolver';
import {SetTokenComponent} from "../components/setToken-component/set-token.component";
import {AppGuard} from '../guards/app/app.guard';

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
