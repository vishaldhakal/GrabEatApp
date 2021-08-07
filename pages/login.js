import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useRouter } from "next/router";

export default function Orders() {
  const [loginerror, setLoginerror] = useState(null);
  const [logedin, setLogedin] = useState(false);
  const route = useRouter();
  const [credentials, setcredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setcredentials((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    setLogedin(false);
  };

  const handleSubmit = (e) => {
    const payload = JSON.stringify({
      username: credentials.username,
      password: credentials.password,
    });
    var configg = {
      method: "POST",
      credentials: "include",
      url: `https://grabeatnp.herokuapp.com/api/api-token-auth/`,
      headers: { "Content-Type": "application/json" },
      data: payload,
    };
    axios(configg)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", credentials.username);
        setLoginerror("Sucessfully Logged in");
        setcredentials({
          username: "",
          password: "",
        });
        setLogedin(true);
        route.push("/");
      })
      .catch(function (error) {
        console.log(error.response.status);
        if (error.response.status === 401) {
          setLoginerror("Email or Password Incorrect");
        } else if (error.response.status === 404) {
          setLoginerror("Email or Password Doesnot Exists");
        } else {
          setLoginerror("Email or Password Incorrect");
        }
      });
    e.preventDefault();
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogedin(true);
    } else {
      setLogedin(false);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Grab Eat | Online Food Ordering</title>
      </Head>
      <Navbar />
      <div className="py-5"></div>
      <h3 className="text-center fw-bold text-mine mb-5">Login</h3>
      <div className="d-flex align-items-center justify-content-between">
        {!logedin && (
          <section className="container col-12 col-sm-6 col-md-5 col-lg-4">
            {loginerror && (
              <div
                className="alert alert-danger d-flex justify-content-between mb-5"
                role="alert"
              >
                {loginerror}
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setLoginerror(null)}
                ></button>
              </div>
            )}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control bg-white"
                id="username"
                placeholder="Table1"
                value={credentials.username}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control bg-white"
                id="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button
              className="btn bg-mine w-100 text-light p-2 mt-4"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </section>
        )}
        {logedin && (
          <section className="container col-12 col-sm-6 col-md-5 col-lg-4">
            <h5 className="mb-4 text-center">
              Loged in as : {localStorage.getItem("username")}
            </h5>
            <button
              className="btn bg-mine w-100 text-light p-2 mt-4"
              onClick={(e) => handleLogout(e)}
            >
              Logout
            </button>
          </section>
        )}
      </div>
    </>
  );
}
