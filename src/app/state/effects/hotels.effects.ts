import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HotelsService } from 'src/app/services/hotels.service';
import { Observable, of } from 'rxjs';
import { HotelsActions, HotelsActionTypes, LoadHotelssError, LoadHotelssSuccess } from '../actions/hotels.actions';
import { IHotel } from 'src/app/interfaces/hotel.interface';
import { catchError, map, mergeMap } from 'rxjs/operators';


@Injectable()
export class HotelsEffects {

  public loadHotels$: Observable<HotelsActions> = createEffect(() => this._actions$.pipe(
    ofType(HotelsActionTypes.LoadHotelss),
    mergeMap(() => this._hotelsService.getHotels()
      .pipe(
        map((hotels: IHotel[]) => {
          return new LoadHotelssSuccess(hotels);
        }),
        catchError(() => of(new LoadHotelssError('Server error')))
      ))
  )
  );

  public constructor(
    private _actions$: Actions,
    private _hotelsService: HotelsService
  ) { }

}
