import React from "react";
import AppRouter from "./router";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster />
      <AppRouter />
    </div>
  );
};

export default App;
