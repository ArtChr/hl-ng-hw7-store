import { IHotel } from 'src/app/interfaces/hotel.interface';
import { FavoriteActions, FavoriteActionTypes } from '../actions/favorite.actions';


export interface State extends IHotel {

}

export const initialState: IHotel[] = [];

export function reducer(state: IHotel[] = initialState, action: FavoriteActions): IHotel[] {
  switch (action.type) {

    case FavoriteActionTypes.RemoveHotelFromFav: {
      return state.filter((hotel: IHotel) => hotel !== action.payload);
    }

    case FavoriteActionTypes.AddHotelToFav: {
      const newState = [...state];
      const hotel: IHotel = action.payload;

      if (!newState.includes(hotel)) {
        newState.push(hotel);
      }
      return newState;
    }

    default:
      return state;
  }
}
