import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./page/Login/LoginPage";
import WelcomeRouter from "./routers/WelcomeRouters";
import Test from "./Test";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<WelcomeRouter />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
