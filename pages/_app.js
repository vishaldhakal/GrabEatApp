import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { AppWrapper } from "../context/context";
import axios from "axios";

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    var configg = {
      method: "GET",
      url: `https://grabeatnp.herokuapp.com/api/ads/`,
      mode: "no-cors",
    };
    axios(configg)
      .then((res) => {
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  useEffect(() => {
    const adimg = document.getElementById("adimg");
    const closeadbtn = document.getElementById("closead");
    var timer;
    var millisecBeforeRedirect = 7000;
    function timeOutClear() {
      window.clearTimeout(timer);
      adimg.classList.add("d-none");
    }
    window.addEventListener("load", () => {
      timer = window.setTimeout(function () {
        adimg.classList.remove("d-none");
      }, millisecBeforeRedirect);
    });
    window.addEventListener("click", () => {
      timeOutClear();
      timer = window.setTimeout(function () {
        adimg.classList.remove("d-none");
      }, millisecBeforeRedirect);
    });
    window.addEventListener("scroll", () => {
      timeOutClear();
      timer = window.setTimeout(function () {
        adimg.classList.remove("d-none");
      }, millisecBeforeRedirect);
    });
    window.addEventListener("touchstart", () => {
      timeOutClear();
      timer = window.setTimeout(function () {
        adimg.classList.remove("d-none");
      }, millisecBeforeRedirect);
    });
    closeadbtn.addEventListener("click", () => {
      timeOutClear();
      timer = window.setTimeout(function () {
        adimg.classList.remove("d-none");
      }, millisecBeforeRedirect);
    });
  }, []);
  return (
    <AppWrapper>
      <>
        <Component {...pageProps} />
        <div id="adimg" className="myadbox d-none">
          <div className="position-relative">
            <div className="d-flex justify-content-end p-3">
              <button id="closead" className="btn btn-light closea">
                Close Advertisement
              </button>
            </div>
            <div>
              <Carousel autoPlay>
                {data.map((dat) => (
                  <div key={dat.id}>
                    <img
                      src={"https://grabeatnp.herokuapp.com" + dat.ad}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </>
    </AppWrapper>
  );
}
export default MyApp;
