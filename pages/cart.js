import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useAppContext } from "../context/context";
import axios from "axios";
import { useRouter } from "next/router";

export default function Cart() {
  const [message, setMessage] = useState(null);
  const route = useRouter();
  const {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    decreaseItem,
    serviceCharge,
    totalAmount,
  } = useAppContext();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      route.push("/login");
    }
  }, []);

  const handleSubmission = (e) => {
    e.target.innerHTML = `Submitting...`;
    if (cart.length == 0) {
      setMessage("No any cart items for submission");
    } else {
      var payload = JSON.stringify(cart);
      console.log(payload);
      var configg = {
        method: "POST",
        url: `https://grabeatnp.herokuapp.com/api/submitcart/`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        mode: "no-cors",
        data: payload,
      };
      axios(configg)
        .then((res) => {
          console.log(res.data);
          setMessage("Order Sucessfully Submitted");
          setCart([]);
          route.push("/orders");
        })
        .catch(function (error) {
          console.log(error);
          setMessage("Error Submitting Order");
        });
    }
    setTimeout(function () {
      e.target.innerHTML = `Submit order now`;
    }, 500);
  };

  const minusVsDelete = (cartt, haha = " ") => {
    if (cartt.qty == 1) {
      return (
        <button
          className={"btn minus-btn btn-dark " + haha}
          type="button"
          name="button"
          onClick={() => removeFromCart(cartt.item)}
        >
          -
        </button>
      );
    } else {
      return (
        <button
          className={"btn minus-btn btn-dark " + haha}
          type="button"
          name="button"
          onClick={() => decreaseItem(cartt.item)}
        >
          -
        </button>
      );
    }
  };

  return (
    <>
      <Head>
        <title>Grab Eat | Online Food Ordering</title>
      </Head>
      <Navbar shadow="bg-light" />
      <section className="py-3">
        <div className="container-fluid px-5">
          <div className="d-flex align-items-sm-center flex-column flex-sm-row mb-3">
            <a href="" className="text-dark text-decoration-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left-short"
                viewBox="0 0 18 18"
              >
                <path
                  fillRule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                ></path>
              </svg>
              Back to Menu
            </a>
            <nav aria-label="breadcrumb" className="ps-0 ps-sm-4">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/" className="text-dark text-decoration-none">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Cart
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="container-fluid px-5">
          <div className="row row-cols-1 row-cols-md-2 bg-white rounded-mine">
            <div className="col-12 col-md-8 cart px-4">
              <div className="py-5">
                {message && (
                  <div
                    className="alert alert-danger d-flex justify-content-between"
                    role="alert"
                  >
                    {message}
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setMessage(null)}
                    ></button>
                  </div>
                )}
                <div className="row row-cols-5 fw-mine bg-light py-2 align-items-center">
                  <div className="col-5">Item</div>
                  <div className="col-2">Quantity</div>
                  <div className="col-2">Price Each</div>
                  <div className="col-2">Total</div>
                  <div className="col-1"></div>
                </div>

                {cart.map((cartitem) => (
                  <div
                    className="row row-cols-5 mt-4 align-items-center"
                    key={cartitem.item.id}
                  >
                    <div className="col-5 d-flex align-items-center">
                      <img
                        src={
                          "https://grabeatnp.herokuapp.com" +
                          cartitem.item.thumbnail_image
                        }
                        alt="..."
                        className="img-fluid small-cart-img"
                      />
                      <span className="ms-3">
                        <b>{cartitem.item.name}</b>
                        <br />
                        {cartitem.qty} * {cartitem.item.price}
                      </span>
                    </div>
                    <div className="col-2">
                      <div className="quantity d-flex justify-content-between align-items-center">
                        {minusVsDelete(cartitem)}
                        <p className="p-2 px-3 bg-white mb-0">{cartitem.qty}</p>
                        <button
                          className="btn plus-btn btn-dark"
                          type="button"
                          name="button"
                          onClick={() => addToCart(cartitem.item)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-2">{cartitem.item.price}</div>
                    <div className="col-2">
                      {cartitem.item.price * cartitem.qty}
                    </div>
                    <div className="col-1">
                      <button
                        className="btn deletebtn btn-sm shadow-sm"
                        onClick={() => removeFromCart(cartitem.item)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path
                            fillRule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
                <div className="row row-cols-5 fw-mine bg-light py-2 align-items-center my-5">
                  <div className="col-5">Total</div>
                  <div className="col-2">-</div>
                  <div className="col-2">-</div>
                  <div className="col-2">Rs {totalAmount()}</div>
                  <div className="col-1">-</div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 py-5">
              <div className="myps3">
                <div className="px-1">
                  <div className="d-flex justify-content-between">
                    <h5 className="fw-mine">Cart Subtotal</h5>
                    <p className="text-end">Rs {totalAmount()}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="fw-mine mb-1">Service Charge (13%)</h5>
                    <p className="text-end mb-1">+ Rs {serviceCharge()}</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <h5 className="fw-mine">Total Paying Amount</h5>
                    <p className="text-end">
                      Rs {totalAmount() + serviceCharge()}
                    </p>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-between mt-3">
                  <button
                    className="btn bg-mine text-light btn-lg"
                    onClick={(e) => handleSubmission(e)}
                  >
                    Submit order now &nbsp;&nbsp;
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-right"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </button>
                  <button
                    className="btn btn-light shadow-sm btn-lg mt-4"
                    onClick={() => setCart([])}
                  >
                    Empty Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
