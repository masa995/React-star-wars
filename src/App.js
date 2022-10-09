import React from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage, PeoplePage, PersonPage, FavoritesPage, SearchPage, NotFound } from "./pages/index"
import Layout from "./Layout/Layout";

const App = () => {

  return (
    <Routes>
      <Route
        path={"/"}
        element={<Layout />}
      >
        <Route
          path={"/"}
          element={<HomePage />}
          index={true}
        />

        <Route
          path={"/people"}
          element={<PeoplePage />}
        />

        <Route
          path={"/people/:id"}
          element={
            <PersonPage />
          }
        />

        <Route
          path={"/favorites"}
          element={
            <FavoritesPage />
          }
        />

        <Route
          path={"/search"}
          element={
            <SearchPage />
          }
        />

        <Route
          path={"*"}
          element={<NotFound />} //page 404
        />
      </Route>
    </Routes>
  )
}

export default App;
