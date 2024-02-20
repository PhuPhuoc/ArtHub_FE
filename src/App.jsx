import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./page/Login/LoginPage";
import WelcomeRouter from "./routers/WelcomeRouters";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<WelcomeRouter />} />
    </Routes>
  );
}

export default App;
