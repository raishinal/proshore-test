import { UPDATE_SPELL_LIST } from "../constants/actiontypes";

//===================================================
// init
//===================================================
const initialState = {
  spellList: [],
};

//===================================================
// reducer
//===================================================
export const SpellReducer = (state = initialState, action) => {
  //switch acctions
  switch (action.type) {
    case UPDATE_SPELL_LIST:
      return {
        ...state,
        spellList: action.payload.spellList,
      };
    default:
      return state;
  }
};
