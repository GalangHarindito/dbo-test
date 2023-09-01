import { useNavigate } from "react-router-dom";
import LoginForm from "../../component/fragment/form/login";
import { fetchLogin } from "../../api/login";
import "./style.css";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (value) => {
    const { userName, password } = value;
    if (userName && password) {
      await fetchLogin(value)
        .then((res) => {
          const { status } = res;
          if (status === 200) {
            navigate("/dashboard/customer");
          }
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <div>
      <LoginForm onSubmit={(value) => handleSubmit(value)} />
    </div>
  );
};

export default Login;
