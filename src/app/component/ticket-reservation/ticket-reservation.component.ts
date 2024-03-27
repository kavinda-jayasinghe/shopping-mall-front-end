import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-ticket-reservation',
  templateUrl: './ticket-reservation.component.html',
  styleUrls: ['./ticket-reservation.component.css']
})
export class TicketReservationComponent {
  reservationForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<TicketReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.reservationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      reserveDate: ['', Validators.required],
      reserveTime: ['', Validators.required],
      priceRange: ['', Validators.required],
      numberOfTickets: ['', [Validators.required, Validators.min(1)]]
    });
  }

  get f() {
    return this.reservationForm.controls;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    // Handle form submission
    if (this.reservationForm.valid) {
      // Perform the reservation process
    }
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    // Add event handling for date picker
  }
}
