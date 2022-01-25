// import React, { useState, useEffect } from "react";

// export default function Login() {
//   const [username, setUserName] = useState();
//   const [password, setPassword] = useState();

//   useEffect(() => {
//     if (window.sessionStorage.getItem("Admin123"))
//       window.location.href = "donorInfo";
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (username === "Admin123" && password === "admin123") {
//       alert("Valid Credentials!!!");
//       window.sessionStorage.setItem(username, password);
//       window.location.href = "donorInfo";
//     } else {
//       alert("Invalid credentials!!!");
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <h1>Please Log In</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           <p>Username</p>
//           <input type="text" onChange={(e) => setUserName(e.target.value)} />
//         </label>
//         <label>
//           <p>Password</p>
//           <input
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

import React, { Component } from "react";
import axios, { Axios } from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import { Outlet, Link } from "react-router-dom";

import "./DonorInformation.css";
import UpdateDonor from "./UpdateDonor";
import { GoogleLogout } from "react-google-login";

class Login extends Component {
  componentDidMount() {
    this.googleSDK();
    console.log("sfsfd");
  }

  prepareLoginButton = () => {
    console.log(this.refs.googleLoginBtn);

    this.auth2.attachClickHandler(
      this.refs.googleLoginBtn,
      {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        localStorage.setItem("googleid", profile.getId());
        localStorage.setItem("gmailid", profile.getEmail());
        console.log("Token || " + googleUser.getAuthResponse().id_token);
        console.log("ID: " + profile.getId());
        console.log("Name: " + profile.getName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
        window.location.href = "donorInfo";
      },
      (error) => {
        alert(JSON.stringify(error, undefined, 2));
      }
    );
  };
  logout = (response) => {
    console.log("logout");
    localStorage.removeItem("googleid");
    localStorage.removeItem("gmailid");
    // this.setState(
    //   (state) => ({
    //     isLogined: false,
    //     token: "",
    //   }),
    //);
    console.log(response);
  };
  googleSDK = () => {
    window["googleSDKLoaded"] = () => {
      window["gapi"].load("auth2", () => {
        this.auth2 = window["gapi"].auth2.init({
          client_id:
            "128338408723-q48h35dekkvdsljd4s7ptkg9escrvj2t.apps.googleusercontent.com",
          cookiepolicy: "single_host_origin",
          scope: "profile email",
        });
        this.prepareLoginButton();
        this.prepareLogoutButton();
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "google-jssdk");
  };

  render() {
    return (
      <body>
        <div>
          <Button
            className="btn btn-success"
            onClick={() => (window.location.href = "home")}
            style={{ float: "left" }}
          >
            Go to Home
          </Button>
          {"\n"}
        </div>
        <center style={{ padding: "8cm" }}>
          <div style={{ borderColor: "green" }}>
            <h2 className="text-left">Google Login</h2>
            <button className="btn btn-success" ref="googleLoginBtn">
              Login with Google
            </button>
          </div>
        </center>
      </body>
    );
  }
}

export default Login;
