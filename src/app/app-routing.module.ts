import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewsListComponent} from './components/news-list/news-list.component';
import {NewsDetailsComponent} from './components/news-details/news-details.component';

const routes: Routes = [
  {
    path: 'stories',
    component: NewsListComponent
  },
  {
    path: 'stories/:id',
    component: NewsDetailsComponent
  },
  {
    path: '',
    redirectTo: 'stories',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
