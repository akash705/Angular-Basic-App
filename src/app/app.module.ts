import { accessing } from './components/guards/accessing';
import { dataShare } from './services/data-sharing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { PostComponent } from './components/posts/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './components/posts/posts.component';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
// import { SinglePostComponent } from './components/single-post/single-post.component';
import { ShowDirective } from './show.directive';

const appRoutes: Routes = [
  { path: '', component: PostsComponent },
  // { path: 'singlePost',canActivate:[accessing],children:[
  //       {path:'',redirectTo:'/',pathMatch:'full',canActivate:[accessing]},
  //       {path:':id',loadChildren:'./components/single-post/single-post.module' }
  //   ]     
  // },
  {path:'singlePost/:id',loadChildren:'./components/single-post/single-post.module#SinglePostModule'},
  {path:'**',redirectTo:'/'}
];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PostComponent,
    PostsComponent,
    ShowDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [
    dataShare,
    accessing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
