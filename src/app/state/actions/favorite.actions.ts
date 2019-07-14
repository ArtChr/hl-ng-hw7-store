import { Action } from '@ngrx/store';
import { IHotel } from 'src/app/interfaces/hotel.interface';

export enum FavoriteActionTypes {
  RemoveHotelFromFav = '[Fav] Remove hotel from favorite',
  AddHotelToFav = '[Fav] Add hotel from favorite',
}

export class RemoveHotelFromFav implements Action {
  readonly type = FavoriteActionTypes.RemoveHotelFromFav;
  public constructor(public payload: IHotel) {}
}

export class AddHotelToFav implements Action {
  readonly type = FavoriteActionTypes.AddHotelToFav;
  public constructor(public payload: IHotel) {}
}


export type FavoriteActions =
  RemoveHotelFromFav
  | AddHotelToFav
  ;
