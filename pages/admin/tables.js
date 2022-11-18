import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function Tables() {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <main id="main" className="main">
        <section>
          <div className="d-flex justify-content-between pb-4 pt-2 px-1 px-md-5">
            <h4 className="fw-bold px-1">Manage Tables</h4>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModaladdtable"
            >
              Add Table
            </button>
            <div
              className="modal fade"
              id="exampleModaladdtable"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title fw-bold" id="exampleModalLabel">
                      Add New Table
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
                            Table Name{" "}
                            <span className="text-danger">
                              <sup>*</sup>{" "}
                            </span>
                          </label>
                          <input type="name" className="form-control" />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="modal-footer d-flex justify-content-center">
                    <button type="button" className="btn btn-success ">
                      Add New Table
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-1 px-md-5 pt-4">
            <table className="table table-striped table-responsive">
              <thead>
                <tr>
                  <th scope="col">SN</th>
                  <th scope="col">Table Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Table 1</td>
                  <td className="d-flex">
                    <button
                      type="button"
                      className="btn btn-outline-dark mx-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModaltable"
                    >
                      Edit
                    </button>
                    <div
                      className="modal fade"
                      id="exampleModaltable"
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
                              Edit Table
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
                                    Table Name{" "}
                                    <span className="text-danger">
                                      <sup>*</sup>{" "}
                                    </span>
                                  </label>
                                  <input type="name" className="form-control" />
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-success ">
                              Update Table
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
                  <td>Table 2</td>
                  <td className="d-flex">
                    <button
                      type="button"
                      className="btn btn-outline-dark mx-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModaltable1"
                    >
                      Edit
                    </button>
                    <div
                      className="modal fade"
                      id="exampleModaltable1"
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
                              Edit Table
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
                                    Table Name{" "}
                                    <span className="text-danger">
                                      <sup>*</sup>{" "}
                                    </span>
                                  </label>
                                  <input type="name" className="form-control" />
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-success ">
                              Update Table
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
