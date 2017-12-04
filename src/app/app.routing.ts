import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { SearchDetailComponent} from './search-detail/search-detail.component'


const appRoutes: Routes = [
    {
        path:"",
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path:"videos",
        component: VideoListComponent,
        pathMatch: 'full'
    },
    {
        path:"videos/:slug",
        component: VideoDetailComponent,
        pathMatch: 'full'
    },
    {
        path:"search",
        component: SearchDetailComponent,
        pathMatch: 'full'
    }
]

export const APP_ROUTING = RouterModule.forRoot( appRoutes, {useHash:false});
/* 
@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule(){} */