import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { HotelAvailabilityComponent } from './hotel-availability/hotel-availability.component';
import { ContractComponent } from './contract/contract.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HotelAvailabilityComponent,
    ContractComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Add ReactiveFormsModule to the imports array
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
