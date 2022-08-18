import React from "react";
import { useEffect } from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./signIn.css";

export default function SignIn() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user !== null) {
      navigate("/account", { replace: true });
    }
  }, [user]);
  return (
    <div className="signInContainer">
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  );
}
