import React from "react";

import AppRouter from "./router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster />
      <AppRouter />
    </div>
  );
}

export default App;
