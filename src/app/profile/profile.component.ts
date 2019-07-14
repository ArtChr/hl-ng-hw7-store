import { Component, OnInit } from '@angular/core';
import { IHotel } from '../interfaces/hotel.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../state/reducers/favorite.reducer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  public currentHotel$: Observable<IHotel>;

  public constructor(
    private _store: Store<State>
  ) {}

  public ngOnInit(): void {
    this.currentHotel$ = this._store.select('hotels', 'current');
  }

}
