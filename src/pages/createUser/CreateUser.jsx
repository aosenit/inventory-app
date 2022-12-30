import Button from "@material-ui/core/Button";
import StopIcon from "@material-ui/icons/Stop";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { publicUser } from "../../redux/userSlice";

function CreateUser() {
  let history = useHistory();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const handleCreateUser = (data) => {
    setLoading(true);

    try {
      if (data.password === data.confirmPassword) {
        dispatch(publicUser(data));

        history.push("/login");
      } else {
        alert("password do not tally, please rewrite");
      }
    } catch (error) {
      console.log(error.response);
      alert("Opps! an error has occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="loginContainer">
        <div className="loginHeader">
          <h4>Register</h4>
          <Link to="/">
            <Button size="medium">
              <StopIcon style={{ color: "#00E85D", fontSize: "30px" }} />
              <h4>Inventory</h4>
            </Button>
          </Link>
        </div>

        <form className="loginForm" onSubmit={handleSubmit(handleCreateUser)}>
          <div className="formGroup">
            <h5>Name</h5>
            <input
              id="outlined-basic"
              {...register("fullname", { required: true })}
            />
          </div>
          <div className="formGroup">
            {" "}
            <h5>Email</h5>
            <input
              id="outlined-basic"
              type="email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="formGroup">
            <h5>Password</h5>
            <input
              id="outlined-basic"
              type="password"
              {...register("password", { required: true })}
            />
          </div>

          <div className="formGroup">
            <h5>Confirm Password</h5>
            <input
              id="outlined-basic"
              type="password"
              {...register("confirmPassword", { required: true })}
            />
          </div>

          <div className="formGroup">
            {" "}
            <h5>Role</h5>
            <select {...register("role")}>
              <option value="creator">creator</option>
              <option value="admin">admin</option>
              <option value="sales">sales</option>
            </select>
          </div>

          <button type="submit" loading={loading}>
            {loading ? (
              <CircularProgress color="white" size={20} />
            ) : (
              "Register Now"
            )}
          </button>

          <div className="loginDiv">
            <Link to="/login">
              <p>
                Already have an account? <span className="login">login</span>
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
