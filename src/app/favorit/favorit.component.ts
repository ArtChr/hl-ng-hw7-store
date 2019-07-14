import { Component, OnInit } from '@angular/core';
import { IHotel } from '../interfaces/hotel.interface';
import { Store } from '@ngrx/store';
import { State } from '../state/reducers/favorite.reducer';
import { Observable } from 'rxjs';
import { RemoveHotelFromFav } from '../state/actions/favorite.actions';

@Component({
  selector: 'app-favorit',
  templateUrl: './favorit.component.html'
})
export class FavoritComponent implements OnInit {

  public favHotels$: Observable<IHotel[]>;

  public constructor(
    private store: Store<State>
  ) {
  }

  public ngOnInit(): void {
    this.favHotels$ = this.store.select('favorite');
  }

  public removeHotelFromFav(hotel: IHotel): void {
    this.store.dispatch(new RemoveHotelFromFav(hotel));
  }

}
