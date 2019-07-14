import { Action, Store } from '@ngrx/store';
import { IHotel } from 'src/app/interfaces/hotel.interface';
import { State } from '../reducers/hotels.reducer';

export enum HotelsActionTypes {
  LoadHotelss = '[Hotels] Load Hotelss',
  LoadHotelssSuccess = '[Hotels] Load Hotelss Success',
  LoadHotelssError = '[Hotels] Load Hotelss Error',
  SelectHotel = '[Hotels] Select Hotel',
}

export class LoadHotelss implements Action {
  readonly type = HotelsActionTypes.LoadHotelss;
}

export class LoadHotelssSuccess implements Action {
  readonly type = HotelsActionTypes.LoadHotelssSuccess;

  public constructor(public payload: IHotel[]) { }
}

export class LoadHotelssError implements Action {
  readonly type = HotelsActionTypes.LoadHotelssError;

  public constructor(public payload: string) { }
}

export class SelectHotel implements Action {
  readonly type = HotelsActionTypes.SelectHotel;

  public constructor(public payload: IHotel) { }
}


export type HotelsActions =
  LoadHotelss
  | LoadHotelssSuccess
  | LoadHotelssError
  | SelectHotel
  ;
