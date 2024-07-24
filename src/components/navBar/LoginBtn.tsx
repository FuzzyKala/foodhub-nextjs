import LoginForm from "../popup/LoginForm";
import { useState } from "react";

export default function LoginBtn() {
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  const toggleLoginForm = () => setLoginFormOpen(!loginFormOpen);

  return (
    <div>
      <button
        role="button"
        className="bg-gray-300 rounded-md py-2 px-4 m-4 text-xl text-gray-800"
        onClick={toggleLoginForm}
      >
        Login
      </button>
      <LoginForm loginFormOpen={loginFormOpen} setLoginFormOpen={setLoginFormOpen}/>
    </div>
  );
}
