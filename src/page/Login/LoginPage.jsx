import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()
     const handleLogin = () => {
        navigate("welcome")
     }
    return(
        <div>Hello Login Page
        <Button onClick={handleLogin}>Login</Button>
        </div>
    );
};

export default LoginPage;