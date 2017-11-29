import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

const appRoutes: Routes = [
    {
        path:"",
        component: VideoListComponent
    },
    {
        path:"videos",
        component: VideoListComponent
    },
    {
        path:"videos/:slug",
        component: VideoDetailComponent
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