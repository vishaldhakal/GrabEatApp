import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useRouter } from "next/router";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [orderstotal, setOrderstotal] = useState(0);
  function serviceCharge() {
    let charge = (13 / 100) * orderstotal;
    return Math.floor(charge);
  }

  const route = useRouter();

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
  }, []);
  return (
    <>
      <Head>
        <title>Grab Eat | Online Food Ordering</title>
      </Head>
      <Navbar />
      <section className="py-3 bg-light">
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
          <div className="row row-cols-3 gy-4">
            {orders.map((order, index) => (
              <div className="col" key={order.id}>
                <div className="rounded-mine bg-white shadow-sm p-3">
                  <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
                    <div>
                      <h5 className="fw-mine mb-0">Order : {index + 1}</h5>
                      <p className="mb-0">By : {order.user.username}</p>
                    </div>
                    <img src="/avatar.png" alt="" className="img-fluid w-25" />
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
                      <p className="mb-0 fw-mine">Total : Rs {order.totals}</p>
                    </div>
                    <span className="mx-2"></span>
                    <button className="btn btn-sm py-2 btn-outline-success">
                      {order.status}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 mt-5 p-4 bg-white rounded-mine">
            {orders.map((item, index) => (
              <div className="d-flex justify-content-between" key={item.id}>
                <h5 className="fw-mine">Order : {index + 1}</h5>
                <p className="text-end">Rs {item.totals}</p>
              </div>
            ))}
            <hr />
            <div className="d-flex justify-content-between">
              <h5 className="fw-mine">Total Orders Amount</h5>
              <p className="text-end">Rs {orderstotal}</p>
            </div>
            <div className="d-flex justify-content-between">
              <h5 className="fw-mine mb-1">Service Charge (13%)</h5>
              <p className="text-end mb-1">+ Rs {serviceCharge()}</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <h5 className="fw-mine">Total Paying Amount</h5>
              <p className="text-end">Rs {orderstotal + serviceCharge()}</p>
            </div>
          </div>
          <button className="btn bg-mine text-light btn-lg w-100 mt-4">
            Pay For The Orders Now
          </button>
        </div>
      </section>
    </>
  );
}
