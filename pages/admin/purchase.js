import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function Purchase() {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <main id="main" className="main">
        <section>
          <div className="pt-3 pb-4">
            <h4 className="fw-bold pb-4 px-1 px-md-5">Purchase Management</h4>
          </div>
          <div className="row row-cols-2 px-1 px-md-5">
            <div className="col-4">
              <div className="mb-3 ">
                <label className="form-label">
                  Select Supplier{" "}
                  <span className="text-danger">
                    <sup>*</sup>
                  </span>{" "}
                </label>
                <select
                  className="form-select form-control mb-3"
                  aria-label="Default select example"
                >
                  <option value="1">Supplier 1</option>
                  <option value="2">Supplier 1</option>
                  <option value="3">Supplier 1</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3 ">
                <label className="form-label">
                  Select Ingredient{" "}
                  <span className="text-danger">
                    <sup>*</sup>
                  </span>{" "}
                </label>
                <select
                  className="form-select form-control mb-3"
                  aria-label="Default select example"
                >
                  <option value="1">Ingredient 1</option>
                  <option value="2">Ingredient 1</option>
                  <option value="3">Ingredient 1</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3 d-flex">
                <div>
                  <label for="exampleFormControlInput1" className="form-label">
                    Quantity
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div className="ps-2">
                  <label className="form-label">
                    Metric
                    <span className="text-danger">
                      <sup>*</sup>
                    </span>{" "}
                  </label>
                  <select
                    className="form-select form-control mb-3 w-100"
                    aria-label="Default select example"
                  >
                    <option value="1"> Kg</option>
                    <option value="2"> Ml</option>
                    <option value="3"> Packets</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <label className="form-label">
                  Payment Type{" "}
                  <span className="text-danger">
                    <sup>*</sup>
                  </span>{" "}
                </label>
                <select
                  className="form-select form-control mb-3"
                  aria-label="Default select example"
                >
                  <option value="1"> Payment Type 1</option>
                  <option value="2"> Payment Type 1</option>
                  <option value="3"> Payment Type 1</option>
                </select>
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3 ">
                <label for="exampleFormControlInput1" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="mb-3">
                <div>
                  <label className="form-label fw-semibold">
                    Purchase Bill
                    <span className="text-danger">
                      <sup>*</sup>
                    </span>
                  </label>
                  <input type="file" className="form-control" />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="mb-3 mt-4">
                <div className="form-floating">
                  <textarea
                    className="form-control remarks"
                    id="floatingTextarea"
                  ></textarea>
                  <label for="floatingTextarea">Remarks</label>
                </div>
              </div>
            </div>
            <div className="col-12 mt-4 d-flex justify-content-center">
              <button type="submit" className="btn btn-success btn-lg">
                Add Purchases
              </button>
            </div>
          </div>
          <div className="py-2"></div>
          <hr />
          <div className="py-3"></div>
          <div className="px-1 px-md-5">
            <table className="table table-striped table-responsive">
              <thead>
                <tr>
                  <th scope="col">SN</th>
                  <th scope="col">Supplier</th>
                  <th scope="col">Ingrident</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Date</th>
                  <th scope="col">Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="col">1</td>
                  <td scope="col">Abc Vendors</td>
                  <td scope="col">Salt</td>
                  <td scope="col">1 Packet</td>
                  <td scope="col">2022-02-11</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">1</td>
                  <td scope="col">Abc Vendors</td>
                  <td scope="col">Salt</td>
                  <td scope="col">1 Packet</td>
                  <td scope="col">2022-02-11</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">1</td>
                  <td scope="col">Abc Vendors</td>
                  <td scope="col">Salt</td>
                  <td scope="col">1 Packet</td>
                  <td scope="col">2022-02-11</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">1</td>
                  <td scope="col">Abc Vendors</td>
                  <td scope="col">Salt</td>
                  <td scope="col">1 Packet</td>
                  <td scope="col">2022-02-11</td>
                  <td scope="col"></td>
                </tr>
                <tr>
                  <td scope="col">1</td>
                  <td scope="col">Abc Vendors</td>
                  <td scope="col">Salt</td>
                  <td scope="col">1 Packet</td>
                  <td scope="col">2022-02-11</td>
                  <td scope="col"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
