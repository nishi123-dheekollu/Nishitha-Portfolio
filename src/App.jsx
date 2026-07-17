import { useState } from "react";
import Intro from "./pages/Intro";
import AppRoutes from "./AppRoutes";

function App() {
  const [introDone, setIntroDone] = useState(false);

  return introDone ? (
    <AppRoutes />
  ) : (
    <Intro onComplete={() => setIntroDone(true)} />
  );
}

export default App;