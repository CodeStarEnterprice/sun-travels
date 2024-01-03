import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  hotelSearchForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.hotelSearchForm = this.fb.group({
      roomCombinations: this.fb.array([this.createRoomCombination()])
    });
  }

  get roomCombinations() {
    return this.hotelSearchForm.get('roomCombinations') as FormArray;
  }

  createRoomCombination() {
    return this.fb.group({
      roomCount: [1, Validators.min(1)],
      numberOfAdults: [1, Validators.min(1)]
    });
  }

  addRoomCombination() {
    this.roomCombinations.push(this.createRoomCombination());
  }

  removeRoomCombination(index: number) {
    this.roomCombinations.removeAt(index);
  }

  getRoomCombinationPlaceholder(index: number): string {
    const roomCount = this.roomCombinations.at(index)?.get('roomCount')?.value;
    const adultCount = this.roomCombinations.at(index)?.get('numberOfAdults')?.value;
    return `${roomCount} room${roomCount > 1 ? 's' : ''} with ${adultCount} adult${adultCount > 1 ? 's' : ''}`;
  }
  

  onSubmit() {
    // Handle form submission
    console.log(this.hotelSearchForm.value);
  }
}
