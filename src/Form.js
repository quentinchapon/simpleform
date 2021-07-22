import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = (props) => {
  const handleUsernameChange = (event) => {
    props.setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    props.setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    props.setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    props.setConfirmPassword(event.target.value);
  };

  const handleIconChange = (event) => {
    if (props.iconChange === "eye") {
      props.setIconChange("eye-slash");
      props.setPasswordVisibility("text");
    } else {
      props.setIconChange("eye");
      props.setPasswordVisibility("password");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.password === props.confirmPassword) {
      props.setFormVisibility("hidden");
      props.setConfirmationVisibility("confirmation");
    } else {
      alert("Attention, vos mots de passe ne correspondent pas");
    }
  };

  return (
    <form className={props.form} onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type={props.passwordVisibility}
        id="username"
        name="username"
        placeholder="Username"
        value={props.username}
        onChange={handleUsernameChange}
      ></input>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="E-mail"
        value={props.email}
        onChange={handleEmailChange}
      ></input>

      <label htmlFor="password">Password</label>
      <div className="inputContainer">
        <input
          type={props.passwordVisibility}
          id="password"
          name="password"
          placeholder="Password"
          value={props.password}
          onChange={handlePasswordChange}
        ></input>
        <FontAwesomeIcon
          className="eye"
          icon={props.iconChange}
          onClick={handleIconChange}
        />
      </div>

      <label htmlFor="confirmPassword">Confirm password</label>
      <div className="inputContainer">
        <input
          type="password"
          id="confirm-password"
          placeholder="Confirm password"
          name="confirmPassword"
          value={props.confirmPassword}
          onChange={handleConfirmPasswordChange}
        ></input>
        <FontAwesomeIcon
          className="eye"
          icon={props.iconChange}
          onClick={handleIconChange}
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default Form;
