import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import FindTalent from "../page/FindTalent/Findtalent";
import OurHub from "../page/OurHub/OurHub";
import PostArt from "../page/PostArt/PostArt";
import HomePage from "../page/Home/HomePage";
import Profile from "../page/Profile/Profile";
import Search from "../page/Search/Search.jsx"; 
import userProfile from "../page/UserProfile/UserProfile.jsx";

import LoginPage from "../page/Login/LoginPage";
import Admin from "../page/Admin/Admin";
import Security from "../page/Security/Security";
import Notification from "../page/Notification/Notification";
import Privacyanddata from "../page/Privacyanddata/Privacyanddata";
import PaymentPage from "../page/Payment/PaymentPage.jsx";
import OrderPage from "../page/Order/OrderPage.jsx";
const welcomeRouterData = [
  { path: "findtalent", component: <FindTalent /> },
  { path: "ourhub", component: <OurHub /> },
  { path: "postart", component: <PostArt /> },
  { path: "profile", component: <Profile /> },
  { path: "search/:item", component: <Search /> },
  { path: "loginpage", component: <LoginPage /> },
  { path: "admin", component: <Admin /> },
  { path: "security", component: <Security /> },
  { path: "notification", component: <Notification /> },
  { path: "privacyanddata", component: <Privacyanddata /> },
  { path: "paymentpage", component: <PaymentPage /> },
  { path: "orderpage", component: <OrderPage /> },
  { path: "userprofile/:id", component: <UserProfile /> },
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
