import { IHotel } from '../../interfaces/hotel.interface';
import { HotelsActions, HotelsActionTypes } from '../actions/hotels.actions';


export interface State {
  isLoading: boolean;
  error: string;
  data: IHotel[];
  current: IHotel;
}

export const initialState: State = {
  isLoading: false,
  error: null,
  data: [],
  current: null
};

export function reducer(state: State = initialState, action: HotelsActions): State {
  switch (action.type) {

    case HotelsActionTypes.LoadHotelss: {
      return {
        ...state,
        isLoading: true
      };
    }

    case HotelsActionTypes.LoadHotelssSuccess: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null
      };
    }

    case HotelsActionTypes.LoadHotelssError: {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    }

    case HotelsActionTypes.SelectHotel: {
      return {
        ...state,
        current: action.payload
      };
    }

    default:
      return state;

  }
}
