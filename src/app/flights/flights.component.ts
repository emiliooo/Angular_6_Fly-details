import { Component } from '@angular/core';
import { FlightsService } from '../core/services/flights.service';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight.model';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent {

  constructor(private flightservice: FlightsService) { }

  flights$: Observable<Flight[]> = this.flightservice.getFlights();           ///$konwencja nazwy obsebroable tzn tj.strumień

  console.log(this.flights$);

}
