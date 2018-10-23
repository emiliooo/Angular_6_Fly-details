import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';


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

  get crew() {
    return this.form.get('crew') as FormArray;
  }

  addCrewMember() {
    this.crew.push(this.buildCrewMember());
    console.log(this.form)
  }

  removeCrewMember(i: number) {
    this.crew.removeAt(i);
    console.log(i)
  }

  buildCrewMember() {
    return this.formBuilder.group({
      name: '',
      job: ''
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      additionalInformation: ['', { validators: [Validators.required] }],
      code: ['SK', { validators: [Validators.required, Validators.minLength(4), Validators.max(7)] }],
      departureTime: ['', { validators: [Validators.required] }],
      destination: ['', { validators: [Validators.required] }],
      origin: ['', { validators: [Validators.required] }],
      returnTime: ['', { validators: [Validators.required] }],
      withSKPlanesDiscount: false,
      crew: this.formBuilder.array([this.buildCrewMember()])
    });
  }

}
