import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";

// modules
import { SpellReducer } from "./modules/reducers/SpellReducer";
import { FavouriteSpellReducer } from "./modules/reducers/FavouriteSpellReducer";

const spellPersistConfig = {
  key: "spells",
  storage,
};
const middleware =
  process.env.NODE_ENV !== "production"
    ? [thunk, require("redux-immutable-state-invariant").default()]
    : [thunk];

const store = reduxCreateStore(
  combineReducers({
    spells: SpellReducer,
    favourites: persistReducer(spellPersistConfig, FavouriteSpellReducer),
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

export const createStore = () => store;
export const persistor = persistStore(store);

export default store;
