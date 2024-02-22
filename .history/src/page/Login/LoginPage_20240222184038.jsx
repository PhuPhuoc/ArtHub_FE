import { Button, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("welcome");
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>Login Page</h1>
            <Input prefix={<UserOutlined />} placeholder="Username" style={{ width: 300, marginBottom: 16 }} />
            <Input.Password prefix={<LockOutlined />} placeholder="Password" style={{ width: 300, marginBottom: 16 }} />
            <Button type="primary" onClick={handleLogin} style={{ width: 300 }}>
                Login
            </Button>
        </div>
    );
};

export default LoginPage;