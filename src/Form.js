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
        type="text"
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
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        value={props.password}
        onChange={handlePasswordChange}
      ></input>

      <label htmlFor="confirmPassword">Confirm password</label>
      <input
        type="password"
        id="confirm-password"
        placeholder="Confirm password"
        name="confirmPassword"
        value={props.confirmPassword}
        onChange={handleConfirmPasswordChange}
      ></input>

      <button type="submit">Register</button>
    </form>
  );
};

export default Form;
