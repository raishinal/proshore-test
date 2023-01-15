import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client/react";
import client from "./common/Apollo";
//redux
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
// pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SingleSpell from "./pages/SingleSpell";
const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/spell/:spellIndex" element={<SingleSpell />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
