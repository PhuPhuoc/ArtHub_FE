import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import FindTalent from "../page/FindTalent/Findtalent";
import OurHub from "../page/OurHub/OurHub";
import PostArt from "../page/PostArt/PostArt";
import HomePage from "../page/Home/HomePage";
import Profile from "../page/Profile/Profile";

import LoginPage from "../page/Login/LoginPage";
import Admin from "../page/Admin/Admin";
import Security from "../page/Security/Security";
const welcomeRouterData = [
  { path: "findtalent", component: <FindTalent /> },
  { path: "ourhub", component: <OurHub /> },
  { path: "postart", component: <PostArt /> },
  { path: "profile", component: <Profile /> },
  { path: "loginpage", component: <LoginPage /> },
  { path: "admin", component: <Admin /> },
  { path: "security", component: <Security /> },
  { path: "nofication", component: <Nofication /> },
  { path: "privacyanddata", component: <Privacyanddata /> },
  { path: "editprofile", component: <Editprofile /> },

];

const DefaultComponent = () => {
  return <HomePage />;
};

const WelcomeRouter = () => {
  return (
    <>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<DefaultComponent />} />
          {welcomeRouterData.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </DefaultLayout>
    </>
  );
};

export default WelcomeRouter;
