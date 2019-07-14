import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IHotel } from '../interfaces/hotel.interface';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../state/reducers/favorite.reducer';
import { AddHotelToFav } from '../state/actions/favorite.actions';
import { LoadHotelss, SelectHotel } from '../state/actions/hotels.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './hotel-list.component.html'
})
export class ListComponent implements OnInit {

  @Input()
  public searchText: string;

  @Input()
  public displayStars: number;

  public isLoading$: Observable<boolean>;

  public hotels$: Observable<IHotel[]>;

  public constructor(
    private _store: Store<State>
  ) {
    this.isLoading$ = this._store.select('hotels', 'isLoading');
    this.getHotels();
  }

  public ngOnInit(): void {
    this.hotels$ = this._store.select('hotels', 'data');
  }

  public getHotels(): void {
    this._store.dispatch(new LoadHotelss());
  }

  public addHotelToFav(hotel: IHotel): void {
    this._store.dispatch(new AddHotelToFav(hotel));
  }

  public selectHotel(hotel: IHotel): void {
    this._store.dispatch(new SelectHotel(hotel));
  }

}
