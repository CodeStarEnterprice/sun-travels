import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { HotelAvailabilityComponent } from './hotel-availability/hotel-availability.component';
import { ContractComponent } from './contract/contract.component';

const routes: Routes = [
  // 
  // { path: '', redirectTo: '/search', pathMatch: 'full' }, // Change '/home' to '/search' or another valid path
  { path: 'search', component: SearchComponent },
  { path: 'hotels', component:HotelAvailabilityComponent},
  { path: 'contract', component:ContractComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
