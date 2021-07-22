import "./App.css";
import Form from "./Form";
import StepTwo from "./StepTwo";
import { useState } from "react";

function App() {
  const [form, setFormVisibility] = useState("");
  const [confirmation, setConfirmationVisibility] = useState("hidden");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
      ></Form>
      <StepTwo
        confirmation={confirmation}
        setFormVisibility={setFormVisibility}
        setConfirmationVisibility={setConfirmationVisibility}
      ></StepTwo>
    </div>
  );
}

export default App;
