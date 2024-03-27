import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketReservationComponent } from '../ticket-reservation/ticket-reservation.component'; // Import the TicketReservationComponent

@Component({
  selector: 'app-pvr-cinema',
  templateUrl: './pvr-cinema.component.html',
  styleUrls: ['./pvr-cinema.component.css']
})
export class PVRCinemaComponent {
  movies: any[] = [
    { name: 'Movie 1', description: 'Description 1', showtime: '10:00 AM', duration: '2h 30m' },
    { name: 'Movie 2', description: 'Description 2', showtime: '1:00 PM', duration: '2h' },
    { name: 'Movie 3', description: 'Description 3', showtime: '4:00 PM', duration: '1h 45m' },
    { name: 'Movie 4', description: 'Description 4', showtime: '7:00 PM', duration: '2h 15m' }
  ];

  constructor(private dialog: MatDialog) {}

  openTicketReservationDialog(movie: any) {
    this.dialog.open(TicketReservationComponent, {
      width: '500px',
      data: { movie }
    });
  }
}
