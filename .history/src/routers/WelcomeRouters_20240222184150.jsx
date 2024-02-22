import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import FindTalent from "../page/FindTalent/Findtalent";
import OurHub from "../page/OurHub/OurHub";
import PostArt from "../page/PostArt/PostArt";
import HomePage from "../page/Home/HomePage";
import LoginPage from "../page/Login/LoginPage";
const welcomeRouterData = [
  { path: "findtalent", component: <FindTalent /> },
  { path: "ourhub", component: <OurHub /> },
  { path: "postart", component: <PostArt /> },
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