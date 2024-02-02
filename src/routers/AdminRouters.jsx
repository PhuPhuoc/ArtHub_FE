import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Dashboard from "../page/Dashboard/Dashboard";
import Collaborators from "../page/Collaborators/Collaborators";

const adminRoutesData = [
    { path: "dashboard", component: <Dashboard/> },
    { path: "collaborators", component: <Collaborators/> },
  ];
  
  const AdminRouter = () => {
    // const nav = useNavigate();
  //   useEffect(() => {
  //     const isAdmin_key = sessionStorage.getItem('isAdmin_key');
  //     if (isAdmin_key === 'false') {
  //       message.error('Tài Khoản của bạn không được phép truy cập vào trang này!');
  //       nav('/staff');
  //     }
  //   }, [nav])
  
    return (
      <>
        <DefaultLayout>
          <Routes>
            {adminRoutesData.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
        </DefaultLayout>
      </>
    );
  };
  
  export default AdminRouter;