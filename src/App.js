import { useEffect, useState } from "react";
import "./App.css";

import jwt_decode from "jwt-decode";
function App({}) {
  const [user, setUser] = useState({});
  function handleCallbackResponsive(responsive) {
    console.log("Encoded JWT ID token" + responsive.credential);
    var userObject = jwt_decode(responsive.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  const handleSignOut = (e) => {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  };

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "555618407648-lkittruvsnt5jr327s088990pgv3bi9t.apps.googleusercontent.com",
      callback: handleCallbackResponsive,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    google.accounts.id.prompt();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1>Google Auth</h1>
      <div id="signInDiv"></div>
      {Object.keys(user).length != 0 && (
        <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
      )}
      {user && (
        <>
          <img src={user.picture} />
          <h1>{user.name}</h1>
        </>
      )}
    </div>
  );
}

export default App;
