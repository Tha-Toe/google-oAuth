import React from "react";
import { UserAuth } from "../context/AuthContext";

export default function AccountPage() {
  const { logOut, user } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Account</h1>
      <div>
        <span>Welcome,</span>
        <span>{user?.displayName}</span>
      </div>
      <button onClick={handleSignOut}>Logout</button>
    </div>
  );
}
