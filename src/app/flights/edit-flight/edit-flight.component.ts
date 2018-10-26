import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightsService } from '../../core/services/flights.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightFormComponent } from '../flight-form/flight-form.component';
import { Flight } from '../../models/flight.model';
import { tap } from 'rxjs/internal/operators/tap';
import { MatSnackBar } from '@angular/material';

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
    private toast: MatSnackBar,
    private router: Router,
    private flightService: FlightsService
  ) { }

  ngOnInit() {
    this.loadFlight();
  }
  editFlight() {
    this.flightService.editFlight(this.flight.key, this.flightForm.form.value)
      .then(this.onEditSuccess.bind(this), this.onEditFailure.bind(this));
  }
  removeFlight() {
    this.flightService.removeFlight(this.flight.key)
      .then(this.onRemoveSuccess.bind(this), this.onRemoveFailure.bind(this));
  }
  private onEditSuccess() {
    this.router.navigate(['dashboard']);
    this.toast.open('Flight hase been successfullt edited', '', { panelClass: 'toast-success' });
  }
  private onEditFailure(error) {
    this.toast.open(error.message, '', { panelClass: 'toast-error' });
  }

  private onRemoveSuccess() {
    this.router.navigate(['dashboard']);
    this.toast.open('Flight hase been successfullt Removed', '', { panelClass: 'toast-success' });
  }

  private onRemoveFailure(error) {
    this.toast.open(error.message, '', { panelClass: 'toast-error' });
  }


  private loadFlight() {
    const key = this.route.snapshot.params['key'];
    this.flightService.getFlight(key)
      .pipe(tap(flight => this.flightForm.setFlight(flight)))
      .subscribe(flight => this.flight = flight);
  }

}
