import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule',
        pathMatch: 'full'
    },
    {
        path: 'team',
        loadChildren: './team/team.module#TeamModule',
        pathMatch: 'full'
    },
    {
        path: 'contact',
        loadChildren: './contact/contact.module#ContactModule',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
