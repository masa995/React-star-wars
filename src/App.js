import React from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./components";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="main__container container">
          <Outlet />
        </div>
      </main>
      <footer>
        <div className="footer__container container">
          <p className="footer__copyright">Start Wars &copy;</p>
        </div>
      </footer>
    </div>
  )
}

export default App;
