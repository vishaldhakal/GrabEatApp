import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function Vatandtax() {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <main id="main" className="main">
        <section className="px-1 px-md-4">
          <div className="d-flex justify-content-between pb-5 pt-2">
            <h4 className="fw-bold">VAT'S And Taxes</h4>
            <div>
              <button
                type="button"
                className="btn btn-primary mx-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModaladdvat"
              >
                Add VAT
              </button>

              <button
                type="button"
                className="btn btn-primary mx-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModaladdtax"
              >
                Add Tax
              </button>
            </div>

            <div
              className="modal fade"
              id="exampleModaladdvat"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title fw-bold" id="exampleModalLabel">
                      Add VAT
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div>
                      <form action="">
                        <div className="mb-3">
                          <label className="form-label fw-semibold">
                            VAT Name
                          </label>
                          <input type="name" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label fw-semibold">
                            Vat Percentage
                          </label>
                          <input type="number" className="form-control" />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="modal-footer d-flex justify-content-center">
                    <button type="button" className="btn btn-success ">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="modal fade"
              id="exampleModaladdtax"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title fw-bold" id="exampleModalLabel">
                      Add Tax
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div>
                      <form action="">
                        <div className="mb-3">
                          <label className="form-label fw-semibold">
                            Tax Name
                          </label>
                          <input type="name" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label fw-semibold">
                            Tax Percentage
                          </label>
                          <input type="number" className="form-control" />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="modal-footer d-flex justify-content-center">
                    <button type="button" className="btn btn-success ">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">SN</th>
                  <th scope="col">VAT Name</th>
                  <th scope="col">VAT %</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>10 %</td>
                  <td className="d-flex">
                    <button
                      type="button"
                      className="btn btn-outline-dark mx-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Edit
                    </button>

                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title fw-bold"
                              id="exampleModalLabel"
                            >
                              Edit VAT
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <div>
                              <form action="">
                                <div className="mb-3">
                                  <label className="form-label fw-semibold">
                                    VAT Name
                                  </label>
                                  <input type="name" className="form-control" />
                                </div>
                                <div className="mb-3">
                                  <label className="form-label fw-semibold">
                                    <i className="fas fa-ruler-vertical"></i>{" "}
                                    VAT Percentage
                                  </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-success ">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>20 %</td>
                  <td className="d-flex">
                    <button
                      type="button"
                      className="btn btn-outline-dark mx-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal2"
                    >
                      Edit
                    </button>

                    <div
                      className="modal fade"
                      id="exampleModal2"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title fw-bold"
                              id="exampleModalLabel"
                            >
                              Edit VAT
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <div>
                              <form action="">
                                <div className="mb-3">
                                  <label className="form-label fw-semibold">
                                    VAT Name
                                  </label>
                                  <input type="name" className="form-control" />
                                </div>
                                <div className="mb-3">
                                  <label className="form-label fw-semibold">
                                    VAT Percentage
                                  </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-success ">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">SN</th>
                  <th scope="col">Tax Name</th>
                  <th scope="col">Tax %</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>10 %</td>
                  <td className="d-flex">
                    <button
                      type="button"
                      className="btn btn-outline-dark mx-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModaltax"
                    >
                      Edit
                    </button>

                    <div
                      className="modal fade"
                      id="exampleModaltax"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title fw-bold"
                              id="exampleModalLabel"
                            >
                              Edit Tax
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <div>
                              <form action="">
                                <div className="mb-3">
                                  <label className="form-label fw-semibold">
                                    Tax Name
                                  </label>
                                  <input type="name" className="form-control" />
                                </div>
                                <div className="mb-3">
                                  <label className="form-label fw-semibold">
                                    Tax Percentage
                                  </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-success ">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>20 %</td>
                  <td className="d-flex">
                    <button
                      type="button"
                      className="btn btn-outline-dark mx-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModaltax2"
                    >
                      Edit
                    </button>

                    <div
                      className="modal fade"
                      id="exampleModaltax2"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title fw-bold"
                              id="exampleModalLabel"
                            >
                              Edit Tax
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <div>
                              <form action="">
                                <div className="mb-3">
                                  <label className="form-label fw-semibold">
                                    Tax Name
                                  </label>
                                  <input type="name" className="form-control" />
                                </div>
                                <div className="mb-3">
                                  <label className="form-label fw-semibold">
                                    Tax Percentage
                                  </label>
                                  <input
                                    type="number"
                                    className="form-control"
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-success ">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
