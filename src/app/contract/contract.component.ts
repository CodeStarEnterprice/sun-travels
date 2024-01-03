import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  hotelContractForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.hotelContractForm = this.fb.group({
      hotelId: ['', Validators.required],
      validFrom: ['', Validators.required],
      validTo: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.hotelContractForm.valid) {
      // Add your logic to save the contract data
      console.log('Contract Data:', this.hotelContractForm.value);
    } else {
      // Handle form validation errors
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
