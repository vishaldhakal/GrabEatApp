import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import ScrollFade from "@benestudioco/react-scrollfade";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function AdminHome() {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <main id="main" class="main">
        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-xxl-4 col-md-4">
                  <div className="card info-card sales-card">
                    <div className="card-body">
                      <h5 className="card-title">
                        Sales <span>| Today</span>
                      </h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-cart"></i>
                        </div>
                        <div className="ps-3">
                          <h6>145</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-md-4">
                  <div className="card info-card sales-card">
                    <div className="card-body">
                      <h5 className="card-title">
                        Sales <span>| Today</span>
                      </h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-cart"></i>
                        </div>
                        <div className="ps-3">
                          <h6>145</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-md-4">
                  <div className="card info-card revenue-card">
                    <div className="card-body">
                      <h5 className="card-title">
                        Revenue <span>| Today</span>
                      </h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-currency-rupee"></i>
                        </div>
                        <div className="ps-3">
                          <h6>Rs. 3,264</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="secction pending-order mt-5">
          <div className="row justify-content-between mb-2">
            <div className="col-lg-8">
              <h3 className="fw-bold">Pending Orders</h3>
            </div>
            <div className="col-lg-4 d-flex justify-content-end">
              <a href="" className="btn btn-outline-dark mb-2">
                View All
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-dark">Order #78/79 34 </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    16 Nov 2022 2:26 PM
                  </h6>
                  <hr />
                  <div>
                    <div className="d-flex align-items-center mb-1">
                      <img
                        src="/logos/aa.jpeg"
                        className="img-fluid order-img"
                        alt=""
                      />
                      <div className="ms-4">
                        <h5 className="fw-bold mb-1">Chicken Burger</h5>
                        <p className="mb-0">
                          240 <span>X</span> 1
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-1">
                      <img
                        src="/logos/aa.jpeg"
                        className="img-fluid order-img"
                        alt=""
                      />
                      <div className="ms-4">
                        <h5 className="fw-bold mb-1">Chicken Burger</h5>
                        <p className="mb-0">
                          240 <span>X</span> 1
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-1">
                      <img
                        src="/logos/aa.jpeg"
                        className="img-fluid order-img"
                        alt=""
                      />
                      <div className="ms-4">
                        <h5 className="fw-bold mb-1">Chicken Burger</h5>
                        <p className="mb-0">
                          240 <span>X</span> 1
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="fw-bold mb-1">3 Items</h6>
                      <h6 className="fw-bold mb-1">Total : Rs. 1000</h6>
                    </div>
                    <button className="d-flex  justify-content-between btn btn-success">
                      Deliver Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-dark">Order #78/79 34 </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    16 Nov 2022 2:26 PM
                  </h6>
                  <hr />
                  <div>
                    <div className="d-flex align-items-center mb-1">
                      <img
                        src="/logos/aa.jpeg"
                        className="img-fluid order-img"
                        alt=""
                      />
                      <div className="ms-4">
                        <h5 className="fw-bold mb-1">Chicken Burger</h5>
                        <p className="mb-0">
                          240 <span>X</span> 1
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-1">
                      <img
                        src="/logos/aa.jpeg"
                        className="img-fluid order-img"
                        alt=""
                      />
                      <div className="ms-4">
                        <h5 className="fw-bold mb-1">Chicken Burger</h5>
                        <p className="mb-0">
                          240 <span>X</span> 1
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="fw-bold mb-1">2 Items</h6>
                      <h6 className="fw-bold mb-1">Total : Rs. 500</h6>
                    </div>
                    <button className="d-flex  justify-content-between btn btn-success">
                      Deliver Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-dark">Order #78/79 34 </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    16 Nov 2022 2:26 PM
                  </h6>
                  <hr />
                  <div>
                    <div className="d-flex align-items-center mb-1">
                      <img
                        src="/logos/aa.jpeg"
                        className="img-fluid order-img"
                        alt=""
                      />
                      <div className="ms-4">
                        <h5 className="fw-bold mb-1">Chicken Burger</h5>
                        <p className="mb-0">
                          240 <span>X</span> 1
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-1">
                      <img
                        src="/logos/aa.jpeg"
                        className="img-fluid order-img"
                        alt=""
                      />
                      <div className="ms-4">
                        <h5 className="fw-bold mb-1">Chicken Burger</h5>
                        <p className="mb-0">
                          240 <span>X</span> 1
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-1">
                      <img
                        src="/logos/aa.jpeg"
                        className="img-fluid order-img"
                        alt=""
                      />
                      <div className="ms-4">
                        <h5 className="fw-bold mb-1">Chicken Burger</h5>
                        <p className="mb-0">
                          240 <span>X</span> 1
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="fw-bold mb-1">3 Items</h6>
                      <h6 className="fw-bold mb-1">Total : Rs. 1000</h6>
                    </div>
                    <button className="d-flex  justify-content-between btn btn-success">
                      Deliver Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="secction pending-order mt-5">
          <div className="row justify-content-between  mb-2">
            <div className="col-lg-8">
              <h3 className="fw-bold">Payments</h3>
            </div>
            <div className="col-lg-4 d-flex justify-content-end">
              <a href="" className="btn btn-outline-dark mb-2">
                View All
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-dark">Payment #78/79 34 </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    16 Nov 2022 2:26 PM
                  </h6>
                  <hr />
                  <div>
                    <h6 className="fw-bold">Order # 78/79 34</h6>
                    <h6 className="fw-bold">Order # 78/79 35</h6>
                    <h5 className="fw-bold">By Table : T-1</h5>
                    <div className="d-flex align-items-center">
                      <h5 className="fw-bold">Payment Method :</h5>
                      <img
                        src="/esewa.png"
                        className="img-fluid mx-2 pay-img"
                        alt=""
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="fw-bold mb-1">3 Items</h6>
                      <h6 className="fw-bold mb-1">Total : Rs. 1000</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-dark">Payment #78/79 34 </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    16 Nov 2022 2:26 PM
                  </h6>
                  <hr />
                  <div>
                    <h6 className="fw-bold">Order # 78/79 34</h6>
                    <h6 className="fw-bold">Order # 78/79 35</h6>
                    <h5 className="fw-bold">By Table : T-1</h5>
                    <div className="d-flex align-items-center">
                      <h5 className="fw-bold">Payment Method :</h5>
                      <img
                        src="/esewa.png"
                        className="img-fluid mx-2 pay-img"
                        alt=""
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="fw-bold mb-1">2 Items</h6>
                      <h6 className="fw-bold mb-1">Total : Rs. 500</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-dark">Payment #78/79 34 </h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    16 Nov 2022 2:26 PM
                  </h6>
                  <hr />
                  <div>
                    <h6 className="fw-bold">Order # 78/79 34</h6>
                    <h6 className="fw-bold">Order # 78/79 35</h6>
                    <h5 className="fw-bold">By Table : T-1</h5>
                    <div className="d-flex align-items-center">
                      <h5 className="fw-bold">Payment Method :</h5>
                      <img
                        src="/esewa.png"
                        className="img-fluid mx-2 pay-img"
                        alt=""
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="fw-bold mb-1">3 Items</h6>
                      <h6 className="fw-bold mb-1">Total : Rs. 1000</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
