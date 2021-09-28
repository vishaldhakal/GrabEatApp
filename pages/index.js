import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useAppContext } from "../context/context";
import axios from "axios";
import { useRouter } from "next/router";
import ScrollFade from "@benestudioco/react-scrollfade";

export default function Home() {
  const [cartslider, setCartSlider] = useState(false);
  const [hehehe, setHehehe] = useState(null);
  const [dataa, setDataa] = useState([]);
  const [message, setMessage] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const route = useRouter();
  const [categories, setCategories] = useState([]);
  const [credentials, setcredentials] = useState({
    category: "All",
    sorting: "1",
  });
  const [addcart, setaddcart] = useState({
    display: "d-none",
    image: "",
  });

  const beforeCart = (ite) => {
    setaddcart({
      display: "",
      image: "https://grabeatnp.herokuapp.com" + ite.thumbnail_image,
    });
    setTimeout(function () {
      setaddcart({
        display: "d-none",
        image: "https://grabeatnp.herokuapp.com" + ite.thumbnail_image,
      });
    }, 600);
  };

  const handleSubmission = (e) => {
    e.target.innerHTML = `Submitting...`;
    if (cart.length == 0) {
      setMessage("No any cart items for submission");
    } else {
      var payload = JSON.stringify(cart);
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

  const handleChangeSubmit = (e) => {
    const { id, value } = e.target;
    setcredentials((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    setRefetch(!refetch);
  };

  const {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    decreaseItem,
    serviceCharge,
    totalAmount,
  } = useAppContext();

  const cartSliderToggle = () => {
    if (cartslider) {
      setCartSlider(false);
      setHehehe(null);
    } else {
      setCartSlider(true);
      setHehehe("hehe");
    }
  };

  const inCart = (item) => {
    let def = false;
    let cartindex = 0;
    cart.forEach((element, index) => {
      if (element.item.id == item.id) {
        def = true;
        cartindex = index;
      }
    });
    if (def) {
      return (
        <div className="quantity d-flex w-100 justify-content-between">
          {minusVsDelete(cart[cartindex], "px-4")}
          <h5 className="mb-0 p-2 px-3">{cart[cartindex].qty}</h5>
          <button
            className="btn plus-btn btn-dark px-4"
            type="button"
            name="button"
            onClick={() => {
              addToCart(cart[cartindex].item);
            }}
          >
            +
          </button>
        </div>
      );
    } else {
      return (
        <button
          type="button"
          className="btn btn-mine btn-sm py-2 w-100"
          onClick={() => {
            addToCart(item);
            beforeCart(item);
          }}
        >
          Add to cart
        </button>
      );
    }
  };

  const minusVsDelete = (cartt, haha = " ") => {
    if (cartt.qty == 1) {
      return (
        <button
          className={"btn btn-dark text-light " + haha}
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

  const listItemsToBuy = () =>
    dataa.map((item) => (
      <div className="col" key={item.id}>
        <div className="card bg-white border-0 rounded-mine shadow-sm is-loading">
          <img
            src={"https://grabeatnp.herokuapp.com" + item.thumbnail_image}
            className="card-img-top image"
            alt="Food Image Loading"
          />
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="card-title fw-bold">{item.name}</h5>
              <h5 className="card-title fw-bold">Rs {item.price}</h5>
            </div>
            <p className="card-text">{item.small_note}</p>
            <div className="d-flex align-items-center justify-content-between">
              {inCart(item)}
            </div>
          </div>
        </div>
      </div>
    ));

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      route.push("/login");
    } else {
      var configg = {
        method: "GET",
        url: `https://grabeatnp.herokuapp.com/api/foodlists_search/?category=${credentials.category}&sorting=${credentials.sorting}`,
        headers: {
          "Content-Type": "text/plain",
          Authorization: `Token ${localStorage.getItem("token")}`,
        },
        mode: "no-cors",
      };
      axios(configg)
        .then((res) => {
          setDataa(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      var configg2 = {
        method: "GET",
        url: `https://grabeatnp.herokuapp.com/api/categorylists/`,
        mode: "no-cors",
      };
      axios(configg2)
        .then((res) => {
          setCategories(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [refetch]);

  return (
    <>
      <Head>
        <title>Grab Eat | Online Food Ordering</title>
      </Head>
      <Navbar />
      <div
        className={hehehe}
        onClick={() => {
          cartSliderToggle();
        }}
      ></div>
      <section>
        <div className="row row-cols-2 g-0">
          <div className="col col-2 bg-mine3 position-relative">
            <div className="d-flex flex-column py-4 px-3 leftbar hei">
              <h5 className="mb-4 pb-2 desm">Menu Categories</h5>
              <button className="btn bg-mine py-2 text-light d-flex justify-content-between mb-3">
                <span>All</span>
                <span>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
              <button className="btn bg-light py-2 text-dark d-flex justify-content-between mb-3">
                <span>Foods</span>
                <span>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
              <button className="btn bg-light py-2 text-dark d-flex justify-content-between mb-3">
                <span>Drinks</span>
                <span>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
              <button className="btn bg-light py-2 text-dark d-flex justify-content-between mb-3">
                <span>Lunch</span>
                <span>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
              <button className="btn bg-light py-2 text-dark d-flex justify-content-between mb-3">
                <span>Beverages</span>
                <span>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
              <button className="btn bg-light py-2 text-dark d-flex justify-content-between mb-3">
                <span>Coffees</span>
                <span>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
              <button className="btn bg-light py-2 text-dark d-flex justify-content-between mb-3">
                <span>Arabic</span>
                <span>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
              <button className="btn bg-light py-2 text-dark d-flex justify-content-between mb-3">
                <span>Tibetian</span>
                <span>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
              <button className="btn bg-light py-2 text-dark d-flex justify-content-between mb-3">
                <span>Spicy</span>
                <span>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
              <button className="btn bg-light py-2 text-dark d-flex justify-content-between mb-3">
                <span>Vegeterian</span>
                <span>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <div className="col col-10 position-relative">
            <div className="py-3 bg-mine3 w-100 hei3">
              <div className="row row-cols-5 gx-5 mx-0">
                <div className="col-5">
                  <form className="d-flex">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control py-3"
                        placeholder="Search your food"
                        aria-label="Search your food"
                        aria-describedby="basic-addon2"
                      />
                      <span className="input-group-text" id="basic-addon2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="16"
                          fill="currentColor"
                          className="bi bi-search"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </span>
                    </div>
                  </form>
                </div>
                <div className="col-3">
                  <select
                    className="form-select py-3"
                    id="sorting"
                    aria-label="Floating label select example2"
                    value={credentials.sorting}
                    onChange={(e) => handleChangeSubmit(e)}
                  >
                    <option value="1">Price Low to High</option>
                    <option value="2">Price High to Low</option>
                  </select>
                </div>
                <div className="col-4 d-flex justify-content-end">
                  <button
                    className="btn bg-mine2 py-0 text-light fw-mine d-flex align-items-center justify-content-center cart-button position-relative"
                    type="button"
                    onClick={cartSliderToggle}
                  >
                    <div className={"add-to-cart-cover " + addcart.display}>
                      <img
                        src={addcart.image}
                        alt="food image"
                        className="add-to-cart-image"
                      />
                    </div>
                    <span className="fw-mine p-2 ms-1 fss d-flex align-items-center">
                      <span className="position-relative">
                        <span
                          aria-hidden="true"
                          className="bagIcon___1Ywzd bagHighlighted___3nqc4"
                        ></span>
                        <span
                          aria-hidden="true"
                          className="text-sm text-bold text-center absoluteCenter text-mine2"
                          data-e2e="cart-order-count"
                        >
                          {cart.length}
                        </span>
                      </span>
                      <span className="mx-1"></span>
                      <span className="badge bg-white text-mine2 fw-mine fss">
                        Cart | Rs {totalAmount()}
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {cartslider && (
              <div className="rightbar shadow-lg slide-left">
                <div className="offcanvas-header mt-3">
                  <div id="offcanvasRightLabel">
                    <span>Pending Orders</span>
                    <span className="mx-2">|</span>{" "}
                    <a href="#" className="normal-link">
                      View Submitted Orders
                    </a>
                  </div>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    onClick={cartSliderToggle}
                  ></button>
                </div>
                <div className="offcanvas-body">
                  {message && (
                    <div
                      className="alert alert-danger d-flex justify-content-between my-4"
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
                  <div className="tabh position-relative">
                    <ScrollFade />
                    <table className="table table-borderless table-striped  mb-0">
                      <thead className="sticky-top bg-mine text-light fw-mine">
                        <tr>
                          <th scope="col">S.N</th>
                          <th scope="col">Item</th>
                          <th scope="col">Price</th>
                          <th scope="col">Qty</th>
                          <th scope="col">Total</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((cartitem, index) => (
                          <tr key={cartitem.item.id}>
                            <td scope="col" className="py-4">
                              <span>{index + 1}</span>
                            </td>
                            <td scope="col" className="py-4">
                              <span>{cartitem.item.name}</span>
                            </td>
                            <td scope="col" className="py-4">
                              <span>{cartitem.item.price}</span>
                            </td>
                            <td scope="col" className="py-4">
                              <div className="quantity d-flex justify-content-between align-items-center">
                                {minusVsDelete(cartitem)}
                                <p className="p-2 px-3 bg-white mb-0">
                                  {cartitem.qty}
                                </p>
                                <button
                                  className="btn plus-btn btn-dark"
                                  type="button"
                                  name="button"
                                  onClick={() => addToCart(cartitem.item)}
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td scope="col" className="py-4">
                              {cartitem.item.price * cartitem.qty}
                            </td>
                            <td scope="col" className="py-4">
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
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-1 mt-3">
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
                  <div className="d-flex justify-content-between mt-3">
                    <button
                      className="btn btn-dark btn-lg"
                      onClick={() => setCart([])}
                    >
                      Empty Cart
                    </button>
                    <button
                      className="btn bg-mine text-light btn-lg"
                      onClick={(e) => handleSubmission(e)}
                    >
                      Submit order now
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
                  </div>
                </div>
              </div>
            )}
            <div className="my-2"></div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-mine mx-0 pt-4 px-3">
              {listItemsToBuy()}
            </div>
            <div className="py-5"></div>
          </div>
        </div>
      </section>
    </>
  );
}
