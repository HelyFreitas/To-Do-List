import React from "react";
import RoutesApp from "./routes/index.jsx";
import { AuthProvider } from "./contexts/auth.jsx";

const App = () => {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  );
};

export default App;
