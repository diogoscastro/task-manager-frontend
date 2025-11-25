import { useNavigate } from "react-router-dom";

import CustomButton from "../components/CustomButton";

import "./Login.scss";
import logo from "../assets/images/logo-2.png";

const Login = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate("/Diogo");
    };
    return (
        <div className="login-container">
            <img src={logo} alt="Full Stack Club" />
            <div className="button-container"></div>
            <CustomButton onClick={handleSignInClick}>Entrar</CustomButton>
        </div>
    );
};

export default Login;
