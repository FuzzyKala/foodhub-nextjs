// import RegisteredForm from "../popup/RegisteredForm";
import FormControl from "@/components/form/FormControl";
import { useState } from "react";

export default function LoginBtn() {
  const [FormOpen, setFormOpen] = useState(false);
  const toggleLoginForm = () => setFormOpen(!FormOpen);

  return (
    <div>
      <button
        role="button"
        className="bg-gray-300 rounded-md py-2 px-4 m-4 text-xl text-gray-800"
        onClick={toggleLoginForm}
      >
        Login
      </button>
      {/* <RegisteredForm
        registeredFormOpen={registeredFormOpen}
        setRegisteredFormOpen={setRegisteredFormOpen}
      /> */}
      <FormControl FormOpen={FormOpen} setFormOpen={setFormOpen} />
    </div>
  );
}
