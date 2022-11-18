import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function Users() {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <main id="main" className="main">
        <section>
          <div className="d-flex justify-content-between pb-4 px-1 px-md-5">
            <h4 className="fw-bold px-1">Manage User</h4>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModaladduser"
            >
              Add User
            </button>
            <div
              className="modal fade"
              id="exampleModaladduser"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title fw-bold" id="exampleModalLabel">
                      Add New User
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
                            Username{" "}
                            <span className="text-danger">
                              <sup>*</sup>{" "}
                            </span>
                          </label>
                          <input type="name" className="form-control" />
                        </div>
                        <div className="mb-3 ">
                          <label className="form-label">User Type </label>
                          <select
                            className="form-select form-control mb-3"
                            aria-label="Default select example"
                          >
                            <option value="1">Admin</option>
                            <option value="2">Waiter</option>
                            <option value="3">Admin</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label className="form-label fw-semibold">
                            {" "}
                            Password{" "}
                            <span className="text-danger">
                              <sup>*</sup>{" "}
                            </span>
                          </label>
                          <input type="password" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label fw-semibold">
                            {" "}
                            Confirm Password{" "}
                            <span className="text-danger">
                              <sup>*</sup>{" "}
                            </span>
                          </label>
                          <input type="password" className="form-control" />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="modal-footer d-flex justify-content-center">
                    <button type="button" className="btn btn-success ">
                      Add New User
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-1 px-md-5">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">SN</th>
                  <th scope="col">Username</th>
                  <th scope="col">User Type</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Waiter</td>
                  <td className="d-flex">
                    <button
                      type="button"
                      className="btn btn-outline-dark mx-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModaluser"
                    >
                      Edit
                    </button>
                    <div
                      className="modal fade"
                      id="exampleModaluser"
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
                              Edit User
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
                                    Username{" "}
                                    <span className="text-danger">
                                      <sup>*</sup>{" "}
                                    </span>
                                  </label>
                                  <input type="name" className="form-control" />
                                </div>
                                <div className="mb-3 ">
                                  <label className="form-label">
                                    User Type{" "}
                                  </label>
                                  <select
                                    className="form-select form-control mb-3"
                                    aria-label="Default select example"
                                  >
                                    <option value="1">Admin</option>
                                    <option value="2">Waiter</option>
                                    <option value="3">Admin</option>
                                  </select>
                                </div>
                                <div className="mb-3">
                                  <label className="form-label fw-semibold">
                                    {" "}
                                    Password{" "}
                                    <span className="text-danger">
                                      <sup>*</sup>{" "}
                                    </span>
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                  />
                                </div>
                                <div className="mb-3">
                                  <label className="form-label fw-semibold">
                                    {" "}
                                    Confirm Password{" "}
                                    <span className="text-danger">
                                      <sup>*</sup>{" "}
                                    </span>
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-success ">
                              Update User
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
                  <td>Admin</td>
                  <td className="d-flex">
                    <button
                      type="button"
                      className="btn btn-outline-dark mx-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModaluser1"
                    >
                      Edit
                    </button>
                    <div
                      className="modal fade"
                      id="exampleModaluser1"
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
                              Edit User
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
                                    Username{" "}
                                    <span className="text-danger">
                                      <sup>*</sup>{" "}
                                    </span>
                                  </label>
                                  <input type="name" className="form-control" />
                                </div>
                                <div className="mb-3 ">
                                  <label className="form-label">
                                    User Type{" "}
                                  </label>
                                  <select
                                    className="form-select form-control mb-3"
                                    aria-label="Default select example"
                                  >
                                    <option value="1">Admin</option>
                                    <option value="2">Waiter</option>
                                    <option value="3">Admin</option>
                                  </select>
                                </div>
                                <div className="mb-3">
                                  <label className="form-label fw-semibold">
                                    {" "}
                                    Password{" "}
                                    <span className="text-danger">
                                      <sup>*</sup>{" "}
                                    </span>
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                  />
                                </div>
                                <div className="mb-3">
                                  <label className="form-label fw-semibold">
                                    {" "}
                                    Confirm Password{" "}
                                    <span className="text-danger">
                                      <sup>*</sup>{" "}
                                    </span>
                                  </label>
                                  <input
                                    type="password"
                                    className="form-control"
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-success ">
                              Update User
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
