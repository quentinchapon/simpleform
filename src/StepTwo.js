const StepTwo = (props) => {
  const handleEdit = (event) => {
    props.setFormVisibility("");
    props.setConfirmationVisibility("hidden");
  };

  return (
    <div className={props.confirmation}>
      <p>Thank you, your account has been created</p>
      <div className="recap">
        <p>Name: {props.username}</p>
        <p>Email: {props.email}</p>
        <p>Password: {props.password}</p>
      </div>
      <button className="edit" onClick={handleEdit}>
        {" "}
        Change my informations
      </button>
    </div>
  );
};

export default StepTwo;
