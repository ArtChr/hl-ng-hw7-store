import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { IHotel } from 'src/app/interfaces/hotel.interface';
import * as fromFavorite from './favorite.reducer';
import * as fromHotels from './hotels.reducer';

export interface State {
  favorite: IHotel[];
  hotels: fromHotels.State;
}

export const reducers: ActionReducerMap<State> = {
  favorite: fromFavorite.reducer,
  hotels: fromHotels.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
