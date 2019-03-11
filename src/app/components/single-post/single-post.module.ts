import { Router, Routes, RouterModule } from '@angular/router';
import { MatCardModule,MatButtonModule } from '@angular/material/';
import { SinglePostComponent } from './single-post.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const appRoutes: Routes =[
    {path:'',component:SinglePostComponent}

]
@NgModule({
    declarations:[
        SinglePostComponent,
    ],
    imports:[
        CommonModule,
        MatCardModule,
        MatButtonModule,
        RouterModule.forChild(appRoutes)
    ]
})
export class SinglePostModule{

}
// export default SinglePostModule;