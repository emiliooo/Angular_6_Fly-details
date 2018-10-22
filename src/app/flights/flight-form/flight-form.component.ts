import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent implements OnInit {
  form: FormGroup;
  jobs = [
    { label: 'Stwaredess', value: 'stweradess' },
    { label: 'Senior Cabinc Crew', value: 'senior_cabin_crew' },
    { label: 'Pilot', value: 'pilot' },
    { label: 'Co-Pilot', value: 'co_pilot' },
    { label: 'Mechanic', value: 'mechanic' }
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      additionalInformation: '',
      code: '',
      departureTime: '',
      destination: '',
      origin: '',
      returnTime: '',
      withSKPlanesDiscount: false
      
    });
  }

}
