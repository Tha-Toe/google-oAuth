import React from "react";
import { useNavigate } from "react-router-dom";
import "./navBar.css";
import { UserAuth } from "../context/AuthContext";

export default function NavBar() {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  let navigate = useNavigate();
  const goSingIn = () => {
    navigate("/signin", { replace: true });
  };
  return (
    <div className="navBarContainer">
      <h1>Google Auth</h1>
      {user?.displayName ? (
        <button className="signInButton" onClick={handleSignOut}>
          Log out
        </button>
      ) : (
        <button className="signInButton" onClick={goSingIn}>
          Sign in
        </button>
      )}
    </div>
  );
}
