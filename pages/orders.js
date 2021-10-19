import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useRouter } from "next/router";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [method, setMethod] = useState("Manually Paid");
  const [orderstotal, setOrderstotal] = useState(0);
  const [message, setMessage] = useState(null);
  const [modalstat, setModalstat] = useState(false);

  function serviceCharge() {
    let charge = (13 / 100) * orderstotal;
    return Math.floor(charge);
  }

  const handleChangeMethod = (e) => {
    const { id, value } = e.target;
    setMethod(value);
  };

  const checkStatus = (stat) => {
    if (stat == "Unpaid") {
      return false;
    } else {
      return true;
    }
  };

  const route = useRouter();

  const handlePayment = (e) => {
    const payment = {
      paymentmethod: method,
    };
    var payload = JSON.stringify(payment);
    var configg = {
      method: "POST",
      url: `https://grabeatnp.herokuapp.com/api/payorders/`,
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
        setMessage("Payment Sucessfully Submitted");
        route.push("/orders");
      })
      .catch(function (error) {
        console.log(error);
        setMessage("Error Submitting Payment");
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      route.push("/login");
    } else {
      var configg = {
        method: "GET",
        url: `https://grabeatnp.herokuapp.com/api/orderslists/`,
        headers: {
          "Content-Type": "text/plain",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        mode: "no-cors",
      };
      axios(configg)
        .then((res) => {
          setOrders(res.data.orderdata);
          setOrderstotal(res.data.subtotal);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [message]);

  return (
    <>
      <Head>
        <title>Grab Eat | Online Food Ordering</title>
      </Head>
      <Navbar shadow="bg-light" />
      {modalstat && (
        <div className="modal">
          <section className="modal-main rounded-3">
            <div className="p-3 py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="fw-bold mb-0">Select Payment Method</p>
                <button
                  className="btn btn-outline-danger p-1 py-0"
                  onClick={() => setModalstat(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
              <div className="row row-cols-2 row-cols-md-4 p-3 mt-2 justify-content-center">
                <div className="col p-3">
                  <img
                    src="/logos/cash.png"
                    alt=""
                    className="img-fluid p-3 shadow-sm rounded-mine"
                  />
                </div>
                <div className="col p-3">
                  <img
                    src="/logos/esewa.png"
                    alt=""
                    className="img-fluid p-3 shadow-sm rounded-mine"
                  />
                </div>
                <div className="col p-3">
                  <img
                    src="/logos/ime.png"
                    alt=""
                    className="img-fluid p-3 shadow-sm rounded-mine"
                  />
                </div>
                <div className="col p-3">
                  <img
                    src="/logos/ips.png"
                    alt=""
                    className="img-fluid p-3 shadow-sm rounded-mine"
                  />
                </div>
                <div className="col p-3">
                  <img
                    src="/logos/credit.png"
                    alt=""
                    className="img-fluid p-3 shadow-sm rounded-mine"
                  />
                </div>
                <div className="col p-3">
                  <img
                    src="/logos/bank.png"
                    alt=""
                    className="img-fluid p-3 shadow-sm rounded-mine"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
      <section className="py-3">
        <div className="container-fluid px-4">
          <div className="d-flex align-items-sm-center flex-column flex-sm-row mb-3">
            <a
              href="{% url 'menu' %}"
              className="text-dark text-decoration-none"
            >
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
                  Orders
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="container-fluid px-4 rounded-mine">
          <div className="my-3">
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
          </div>
          <div className="row row-cols-1 row-cols-md-2 bg-white rounded-mine">
            <div className="col-12 col-md-8 cart px-4">
              <div className="row row-cols-2 gy-4">
                {orders.map((order, index) => (
                  <div className="col" key={order.id}>
                    <div className="rounded-mine p-3 bg-light">
                      <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
                        <div>
                          <h5 className="fw-mine mb-0">Order {index + 1}</h5>
                          <p className="mb-0 mt-2 px-2 bg-light-green">
                            Payment : {order.payment_status}{" "}
                            {checkStatus(order.payment_status) &&
                              order.payment_method}
                          </p>
                        </div>
                        <img
                          src="/avatar.png"
                          alt=""
                          className="img-fluid w-25"
                        />
                      </div>
                      {order.orderitems.map((item) => (
                        <div
                          className="d-flex justify-content-start align-items-center mt-4"
                          key={item.food_item.id}
                        >
                          <img
                            src={
                              "https://grabeatnp.herokuapp.com" +
                              item.food_item.thumbnail_image
                            }
                            alt=""
                            className="img-fluid small-cart-img"
                          />
                          <span className="mx-2"></span>
                          <div>
                            <h5 className="fw-mine mb-0 small-text">
                              {item.food_item.name}
                            </h5>
                            <p className="mb-0 fw-mine">
                              Rs {item.food_item.price} * {item.no_of_items}
                            </p>
                          </div>
                        </div>
                      ))}
                      <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
                        <div>
                          <h5 className="fw-mine mb-0 small-text">
                            {order.orderitems.length} Items
                          </h5>
                          <p className="mb-0 fw-mine">
                            Total : Rs {order.totals}
                          </p>
                        </div>
                        <span className="mx-2"></span>
                        <button className="btn btn-sm py-2 btn-success">
                          {order.status}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-12 col-md-4 pb-5">
              <div className="myps3 border p-4 rounded-mine">
                <div className="px-4 bg-white rounded-mine">
                  {orders.map((item, index) => (
                    <div
                      className="d-flex justify-content-between"
                      key={item.id}
                    >
                      <h5 className="fw-mine fs-mine">Order : {index + 1}</h5>
                      <p className="text-end">Rs {item.totals}</p>
                    </div>
                  ))}
                  <hr />
                  <div className="d-flex justify-content-between">
                    <h5 className="fw-mine fs-mine">Total Orders Amount</h5>
                    <p className="text-end">Rs {orderstotal}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 className="fw-mine mb-1 fs-mine">
                      Service Charge (13%)
                    </h5>
                    <p className="text-end mb-1 fs-mine">
                      + Rs {serviceCharge()}
                    </p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <h5 className="fw-mine fs-mine">Total Paying Amount</h5>
                    <p className="text-end">
                      Rs {orderstotal + serviceCharge()}
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  {/* <div className="form-floating w-100 mt-4">
                    <select
                      className="form-select bg-white"
                      id="category"
                      aria-label="Floating label select example"
                      value={method}
                      onChange={(e) => handleChangeMethod(e)}
                    >
                      <option value="Manually paid">Manually paid</option>
                      <option value="Esewa">Esewa</option>
                      <option value="Mobile Banking">Mobile Banking</option>
                    </select>
                    <label htmlFor="floatingSelect">
                      Select Payment Method
                    </label>
                  </div> */}
                  <span className="mx-2"></span>
                  <button
                    className="btn bg-mine text-light btn-lg w-100 mt-4"
                    onClick={() => setModalstat(true)}
                  >
                    Pay For The Orders Now
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
