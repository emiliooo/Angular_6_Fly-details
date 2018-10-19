import { Component } from '@angular/core';
import { FlightsService } from '../core/services/flights.service';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight.model';
import { MatDialog } from '@angular/material';
import { NewFlightComponent } from './new-flight/new-flight.component';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent {

  constructor(
    private dialog: MatDialog,
    private flightservice: FlightsService) { }

  flights$: Observable<Flight[]> = this.flightservice.getFlights();           ///$konwencja nazwy obsebroable tzn tj.strumień

  openFlightModal() {
    this.dialog.open(NewFlightComponent);

  }

}
