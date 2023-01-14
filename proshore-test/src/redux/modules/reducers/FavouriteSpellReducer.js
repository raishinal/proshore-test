import { UPDATE_FAVOURITES } from "../constants/actiontypes";

//===================================================
// init
//===================================================
const initialState = {
  favourites: [],
};

//===================================================
// reducer
//===================================================
export const FavouriteSpellReducer = (state = initialState, action) => {
  //switch acctions
  switch (action.type) {
    case UPDATE_FAVOURITES:
      return {
        ...state,
        favourites: action.payload.favourites,
      };
    default:
      return state;
  }
};
