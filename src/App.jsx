import { Route, Routes } from 'react-router-dom'
import './App.css'
import WelcomePage from './page/Welcome/WelcomePage'
import LoginPage from './page/Login/LoginPage'
import DefaultLayout from './layout/DefaultLayout'

function App() {

  return (
    <Routes>
      <Route path="/welcome" element={<WelcomePage />}/>
      <Route path="" element={<LoginPage />}/>
      <Route path="/layout" element={<DefaultLayout />}/>
    </Routes>
  )
}

export default App
