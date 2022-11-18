import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function Supplier() {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <main id="main" className="main">
        <section>
          <div className="pt-3 d-flex mb-5 justify-content-between px-1 px-md-5">
            <h4 className="fw-bold">Supplier Management</h4>
            <button
              type="button"
              className="btn btn-primary mx-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModaladdvat"
            >
              Add Supplier
            </button>

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
                      Add Supplier
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
                            Supplier Name{" "}
                            <span className="text-danger">
                              <sup>*</sup>{" "}
                            </span>{" "}
                          </label>
                          <input type="name" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label fw-semibold">
                            Supplier Contact Number
                          </label>
                          <input type="text" className="form-control" />
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
          <div className=" px-1 px-md-5 mb-5">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">SN</th>
                  <th scope="col">Spplier Name</th>
                  <th scope="col">Supplier Contact Number</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>123456789</td>
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
                              Edit Supplier
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
                                    Supplier Name{" "}
                                    <span className="text-danger">
                                      <sup>*</sup>{" "}
                                    </span>
                                  </label>
                                  <input type="name" className="form-control" />
                                </div>
                                <div className="mb-3">
                                  <label className="form-label fw-semibold">
                                    <i className="fas fa-ruler-vertical"></i>{" "}
                                    Supplier Contact Number
                                  </label>
                                  <input type="text" className="form-control" />
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
                  <td>123456789</td>
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
                              Edit Supplier
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
                                    Supplier Name{" "}
                                    <span className="text-danger">
                                      <sup>*</sup>{" "}
                                    </span>
                                  </label>
                                  <input type="name" className="form-control" />
                                </div>
                                <div className="mb-3">
                                  <label className="form-label fw-semibold">
                                    Supplier Contact Number
                                  </label>
                                  <input type="text" className="form-control" />
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
