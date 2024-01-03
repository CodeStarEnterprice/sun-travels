import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  // 
  { path: '', redirectTo: '/search', pathMatch: 'full' }, // Change '/home' to '/search' or another valid path
  { path: 'search', component: SearchComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
