import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hotel-availability',
  templateUrl: './hotel-availability.component.html',
  styleUrls: ['./hotel-availability.component.css']
})
export class HotelAvailabilityComponent implements OnInit {
  hotels: any[] = [];

  ngOnInit(): void {
    // Fetch hotel data (you can replace this with an actual API call)
    this.getHotelData();
  }

  // Replace this with actual logic to fetch hotel data
  private getHotelData() {
    // Example data (replace with actual data retrieval)
    this.hotels = [
      {
        hotelName: 'Hotel Jetwin',
        roomType: 'Standard Double Room',
        price: 5000,
        availability: true,
        imageUrl: 'path/to/hotel-a-image.jpg'
      },
      {
        hotelName: 'Hotel Jetwin',
        roomType: 'Standard Double Room',
        price: 5000,
        availability: true,
        imageUrl: 'path/to/hotel-a-image.jpg'
      },
      {
        hotelName: 'Hotel Jetwin',
        roomType: 'Standard Double Room',
        price: 5000,
        availability: true,
        imageUrl: 'path/to/hotel-a-image.jpg'
      },
      {
        hotelName: 'Hotel Jetwin',
        roomType: 'Standard Double Room',
        price: 5000,
        availability: true,
        imageUrl: 'path/to/hotel-a-image.jpg'
      },  {
        hotelName: 'Hotel Jetwin',
        roomType: 'Standard Double Room',
        price: 5000,
        availability: true,
        imageUrl: 'path/to/hotel-a-image.jpg'
      },  {
        hotelName: 'Hotel Jetwin',
        roomType: 'Standard Double Room',
        price: 5000,
        availability: true,
        imageUrl: 'path/to/hotel-a-image.jpg'
      }
      // Add more hotel entries as needed
    ];
  }
}