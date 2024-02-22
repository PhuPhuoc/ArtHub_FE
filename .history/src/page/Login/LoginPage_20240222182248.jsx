import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()
     const handleLogin = () => {
        navigate("welcome")
     }
    return(
        <div> aaa</div>
    );
};

export default LoginPage;