import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightsService } from '../../core/services/flights.service';
import { ActivatedRoute } from '@angular/router';
import { FlightFormComponent } from '../flight-form/flight-form.component';
import { Flight } from '../../models/flight.model';
import { tap } from 'rxjs/internal/operators/tap';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.scss']
})
export class EditFlightComponent implements OnInit {
  @ViewChild('flightForm') flightForm: FlightFormComponent;
  flight: Flight;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightsService
  ) { }

  ngOnInit() {
    this.loadFlight();
  }
 
  private loadFlight() {
    const key = this.route.snapshot.params['key'];
    this.flightService.getFlight(key)
    .pipe(tap(flight => this.flightForm.setFlight(flight)))
      .subscribe(flight => this.flight = flight);
  }

}
