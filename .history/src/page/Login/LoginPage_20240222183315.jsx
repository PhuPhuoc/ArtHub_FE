import { Button, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("welcome");
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Input prefix={<UserOutlined />} placeholder="Username" style={{ width: 300, marginBottom: 16 }} />
            <Input.Password prefix={<LockOutlined />} placeholder="Password" style={{ width: 300, marginBottom: 16 }} />
            <Checkbox style={{ marginBottom: 16 }}>Remember me</Checkbox>
            <Button type="primary" onClick={handleLogin} style={{ width: 300 }}>
                Login
            </Button>
        </div>
    );
};

export default LoginPage;