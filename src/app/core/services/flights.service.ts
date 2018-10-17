import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  private API_URL = '/flights';
  constructor(private db: AngularFireDatabase) { }

  getFlights(): Observable<any[]> {
    return this.db.list<any>(this.API_URL).snapshotChanges()
  }
}
