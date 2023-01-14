import { UPDATE_SPELL_LIST,UPDATE_FAVOURITES } from "../constants/actiontypes";
//===================================================
// Actions
//===================================================
/**
 * Update Spell List
 * @param payload payload
 */
export function updateSpellList(payload) {
    return {
      type: UPDATE_SPELL_LIST,
      payload: payload,
    };
  }

  /**
 * Update Favourite List
 * @param payload payload
 */
export function updateFavouriteList(payload) {
  return {
    type: UPDATE_FAVOURITES,
    payload: payload,
  };
}