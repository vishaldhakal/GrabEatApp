import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { useAppContext } from "../context/context";

export default function Cart() {
  const {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    decreaseItem,
    serviceCharge,
    totalAmount,
  } = useAppContext();

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
      <Navbar />
      <section class="py-3 bg-light">
        <div class="container">
          <div class="d-flex align-items-sm-center flex-column flex-sm-row mb-3">
            <a href="" class="text-dark text-decoration-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-arrow-left-short"
                viewBox="0 0 18 18"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                ></path>
              </svg>
              Back to Menu
            </a>
            <nav aria-label="breadcrumb" class="ps-0 ps-sm-4">
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item">
                  <a href="/" class="text-dark text-decoration-none">
                    Home
                  </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Cart
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="container shadow-sm bg-white rounded-mine">
          <div class="row">
            <div class="col-md-12 cart px-4">
              <div class="py-5">
                <div class="row row-cols-5 fw-mine bg-light py-2 align-items-center">
                  <div class="col-5">Item</div>
                  <div class="col-2">Quantity</div>
                  <div class="col-2">Price Each</div>
                  <div class="col-2">Total</div>
                  <div class="col-1"></div>
                </div>

                {cart.map((cartitem, index) => (
                  <div
                    class="row row-cols-5 mt-3 align-items-center"
                    key={cartitem.item.id}
                  >
                    <div class="col-5 d-flex align-items-center">
                      <img
                        src={cartitem.item.image}
                        alt="..."
                        class="img-fluid small-cart-img"
                      />
                      <span class="ms-2">
                        <b>{cartitem.item.name}</b>
                        <br />
                        {cartitem.qty} * {cartitem.item.price}
                      </span>
                    </div>
                    <div class="col-2">
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
                    <div class="col-2">{cartitem.item.price}</div>
                    <div class="col-2">
                      {cartitem.item.price * cartitem.qty}
                    </div>
                    <div class="col-1">
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

                <div class="row row-cols-5 fw-mine bg-light py-2 align-items-center my-5">
                  <div class="col-5">Total</div>
                  <div class="col-2">-</div>
                  <div class="col-2">-</div>
                  <div class="col-2">Rs {totalAmount()}</div>
                  <div class="col-1">-</div>
                </div>
                <div class="px-1 mt-3">
                  <div class="d-flex justify-content-between">
                    <h5 class="fw-mine">Cart Subtotal</h5>
                    <p class="text-end">Rs {totalAmount()}</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <h5 class="fw-mine mb-1">Service Charge (13%)</h5>
                    <p class="text-end mb-1">+ Rs {serviceCharge()}</p>
                  </div>
                  <hr />
                  <div class="d-flex justify-content-between">
                    <h5 class="fw-mine">Total Paying Amount</h5>
                    <p class="text-end">Rs {totalAmount() + serviceCharge()}</p>
                  </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                  <button
                    class="btn btn-dark btn-lg"
                    onClick={() => setCart([])}
                  >
                    Empty Cart
                  </button>
                  <button class="btn bg-mine text-light btn-lg">
                    Submit order now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-arrow-right"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
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
