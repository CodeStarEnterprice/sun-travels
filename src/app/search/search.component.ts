import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  addRoom() {
    const roomInputs = document.getElementById('roomInputs');

    if (roomInputs) {
      const roomContainer = document.createElement('div');
      roomContainer.className = 'room-container';

      const roomLabel = document.createElement('label');
      roomLabel.textContent = 'Room Combination:';

      const roomInput = document.createElement('input');
      roomInput.type = 'text';
      roomInput.placeholder = 'e.g., 1 room with 1 adult and 1 room with 2 adults';
      roomInput.name = 'roomCombination';

      roomContainer.appendChild(roomLabel);
      roomContainer.appendChild(roomInput);
      roomInputs.appendChild(roomContainer);
    }
  }
}
