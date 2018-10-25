import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Flight, Crew } from '../../models/flight.model';


@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent implements OnInit {
  @Input() editMode = false;
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

  setFlight(flight: Flight) {
    const { key, ...formData } = flight;
    this.form.patchValue(formData);
    formData.crew.forEach(crewMember => this.addCrewMember(crewMember));
  }

  get crew() {
    return this.form.get('crew') as FormArray;
  }

  addCrewMember(crewMember?: Crew) {
    this.crew.push(this.buildCrewMember());
  }

  removeCrewMember(i: number) {
    this.crew.removeAt(i);
  }

  buildCrewMember(crewMember: Crew = {} as Crew) {
    return this.formBuilder.group({
      name: crewMember.name || '',
      job: crewMember.name || ''
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
      crew: this.formBuilder.array((this.editMode ? [] : [this.buildCrewMember()]))
    });
  }

}
