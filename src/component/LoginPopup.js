import { useState } from "react";
import { login } from "../redux/authSlice";
import { useDispatch } from "react-redux";

const LoginPopup = ({onclose}) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
 dispatch(login({email}));
 onclose();
  };
  const handleCreateAccount = () => {
    alert(`Account created for ${email}`);
    onclose();
  };
  return (
    <div className="fixed insert-0 flex items-center justify-center bg-black bg-opacity-0">
      <div className="bg-white p-6 rounded shadow-md w-1/3 relative">
        <button
          onClick={onclose}
          className=" absolute top-2 text-grey-600 hover:text-grey-800"
        >
          &times;
        </button>
      </div>
      <input
        type="text"
        value={email}
        placeholder="enter email"
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 mb-4 border rounded"
      >
        Email
      </input>
      <input
        type="password"
        value={password}
        placeholder="enter password"
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-3 mb-4 border rounded"
      >
        Password
      </input>
      <button
        onClick={isLogin ? handleLogin : handleCreateAccount}
        className="w-full bg-blue-500 text-white p-2 rounded mb-4"
      >
        {isLogin ? "login" : "Create Account"}
      </button>

      <button
        onClick={() => setIsLogin(!isLogin)}
        className="w-full bg-blue-500 "
      >
        {isLogin ? "Create an Account" : "Back to Login"}
      </button>
    </div>
  );
};
export default LoginPopup;
