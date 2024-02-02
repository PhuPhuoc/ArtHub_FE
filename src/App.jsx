import { Route, Routes } from 'react-router-dom'
import './App.css'
import WelcomePage from './page/Welcome/WelcomePage'
import LoginPage from './page/Login/LoginPage'
import AdminRouter from './routers/AdminRouters'


function App() {

  return (
    <Routes>
      <Route path="/welcome" element={<WelcomePage />}/>
      <Route path="" element={<LoginPage />}/>
      <Route path="admin/*" element={<AdminRouter />} /> 
         </Routes>
  )
}

export default App
