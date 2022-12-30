import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import StopIcon from "@material-ui/icons/Stop";
import { useForm } from "react-hook-form";
import { publicRequest } from "../apiRequests";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const { publicUser } = useSelector((state) => state.user);
  let history = useHistory();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (data) => {
    if (
      data.email === publicUser.email &&
      data.password === publicUser.password
    ) {
      setLoading(true);
      try {
        const response = await publicRequest.post("user/login", {
          email: "public@gmail.com",
          password: "public1234",
        });

        localStorage.setItem("userToken", JSON.stringify(response.data.access));

        history.push("/loading");
        window.location.reload();
      } catch (error) {
        setLoading(false);
        console.log(error.response);
      }
    } else {
      alert("please enter correct password and email");
      return;
    }
  };

  return (
    <div>
      <div className="loginContainer">
        <div className="loginHeader">
          <h4>Sign In</h4>
          <Link to="/">
            <Button size="medium">
              <StopIcon style={{ color: "#00E85D", fontSize: "30px" }} />
              <h4>Inventory</h4>
            </Button>
          </Link>
        </div>

        <form className="loginForm" onSubmit={handleSubmit(handleLogin)}>
          <div className="formGroup">
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
              {...register("password", { required: true })}
              type="password"
              autoComplete="current-password"
            />
          </div>

          <button type="submit" loading={loading}>
            {loading ? (
              <CircularProgress color="white" size={20} />
            ) : (
              "Login Now"
            )}
          </button>

          <div className="loginDiv">
            <Link to="/create-user">
              <p>
                You dont have an account?{" "}
                <span className="login">Register</span>
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
