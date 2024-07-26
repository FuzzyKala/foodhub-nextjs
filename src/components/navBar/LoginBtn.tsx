import RegisteredForm from "../popup/RegisteredForm";
import { useState } from "react";

export default function LoginBtn() {
  const [registeredFormOpen, setRegisteredFormOpen] = useState(false);
  const toggleLoginForm = () => setRegisteredFormOpen(!registeredFormOpen);

  return (
    <div>
      <button
        role="button"
        className="bg-gray-300 rounded-md py-2 px-4 m-4 text-xl text-gray-800"
        onClick={toggleLoginForm}
      >
        Login
      </button>
      <RegisteredForm
        registeredFormOpen={registeredFormOpen}
        setRegisteredFormOpen={setRegisteredFormOpen}
      />
    </div>
  );
}
