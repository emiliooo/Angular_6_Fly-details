import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { MaterialModule } from '../material/material.module';
import { NewFlightComponent } from './new-flight/new-flight.component';
import { FlightFormComponent } from './flight-form/flight-form.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [NewFlightComponent],     ////////  komponent dynamiczny
  declarations: [FlightsComponent, FlightCardComponent, NewFlightComponent, FlightFormComponent],
  exports: []
})
export class FlightsModule { }
