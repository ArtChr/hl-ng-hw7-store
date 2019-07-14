import { Component, OnInit } from '@angular/core';
import { IHotel, IWeather } from '../interfaces/hotel.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../state/reducers/hotels.reducer';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {

  public currentHotel$: Observable<IHotel>;

  public constructor(
    private _store: Store<State>
  ) { }

  public ngOnInit(): void {
    this.currentHotel$ = this._store.select('hotels', 'current');
   }

}
