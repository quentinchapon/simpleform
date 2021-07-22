import "./App.css";
import Form from "./Form";
import StepTwo from "./StepTwo";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
library.add(faEye, faEyeSlash);

function App() {
  const [form, setFormVisibility] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmation, setConfirmationVisibility] = useState("hidden");
  const [passwordVisibility, setPasswordVisibility] = useState("password");
  const [iconChange, setIconChange] = useState("eye");

  return (
    <div className="createAccount">
      <h1>Create account</h1>
      <Form
        form={form}
        username={username}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        setUsername={setUsername}
        setEmail={setEmail}
        setPassword={setPassword}
        setConfirmPassword={setConfirmPassword}
        setFormVisibility={setFormVisibility}
        setConfirmationVisibility={setConfirmationVisibility}
        passwordVisibility={passwordVisibility}
        setPasswordVisibility={setPasswordVisibility}
        iconChange={iconChange}
        setIconChange={setIconChange}
      ></Form>
      <StepTwo
        username={username}
        email={email}
        password={password}
        confirmation={confirmation}
        setFormVisibility={setFormVisibility}
        setConfirmationVisibility={setConfirmationVisibility}
      ></StepTwo>
    </div>
  );
}

export default App;
