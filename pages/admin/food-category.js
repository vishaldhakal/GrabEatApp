import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function Foodcategory() {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <main id="main" className="main">
        <section className=" px-1 px-md-5">
          <div className="d-flex justify-content-between pt-2 pb-4">
            <h4 className="fw-bold">Food Category</h4>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Category
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
                    <h5 className="modal-title fw-bold" id="exampleModalLabel">
                      Add Category
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
                            Category Name
                          </label>
                          <input type="name" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label fw-semibold">
                            Category Image
                          </label>
                          <input type="file" className="form-control" />
                          <img
                            src="/noimage.webp"
                            className="no-image img-fluid"
                            alt=""
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="modal-footer d-flex justify-content-center">
                    <button type="button" className="btn btn-success ">
                      Submit New Category
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">SN</th>
                  <th scope="col">Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Chicken Burger</td>
                  <td>
                    <img src="/burger.png" className="img-fluid" alt="" />
                  </td>
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
                              Edit Category
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
                                    Category Name
                                  </label>
                                  <input type="name" className="form-control" />
                                </div>
                                <div className="mb-3">
                                  <label className="form-label fw-semibold">
                                    Category Image
                                  </label>
                                  <input type="file" className="form-control" />
                                  <img
                                    src="/noimage.webp"
                                    className="no-image img-fluid"
                                    alt=""
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-success ">
                              Submit New Category
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
                  <td>Veg Burger</td>
                  <td>
                    <img src="/burger.png" className="img-fluid" alt="" />
                  </td>
                  <td className="d-flex">
                    <button
                      type="button"
                      className="btn btn-outline-dark mx-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal3"
                    >
                      Edit
                    </button>

                    <div
                      className="modal fade"
                      id="exampleModal3"
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
                              Edit Category
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
                                    Category Name
                                  </label>
                                  <input type="name" className="form-control" />
                                </div>
                                <div className="mb-3">
                                  <label className="form-label fw-semibold">
                                    Category Image
                                  </label>
                                  <input type="file" className="form-control" />
                                  <img
                                    src="/noimage.webp"
                                    className="no-image img-fluid"
                                    alt=""
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-success ">
                              Submit New Category
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Chicken Burger</td>
                  <td>
                    <img src="/burger.png" className="img-fluid" alt="" />
                  </td>
                  <td className="d-flex">
                    <button
                      type="button"
                      className="btn btn-outline-dark mx-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal4"
                    >
                      Edit
                    </button>

                    <div
                      className="modal fade"
                      id="exampleModal4"
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
                              Edit Category
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
                                    Category Name
                                  </label>
                                  <input type="name" className="form-control" />
                                </div>
                                <div className="mb-3">
                                  <label className="form-label fw-semibold">
                                    Category Image
                                  </label>
                                  <input type="file" className="form-control" />
                                  <img
                                    src="/noimage.webp"
                                    className="no-image img-fluid"
                                    alt=""
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                          <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-success ">
                              Submit New Category
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
