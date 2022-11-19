import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function Manageorder() {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <main id="main" className="main">
        <section>
          <div className="d-flex justify-content-between pb-5 pt-1 px-1 px-md-5">
            <h4 className="fw-bold px-1">Order History</h4>
            <div>
              <div className="row px-1 px-md-5">
                <div className="col-lg-4">
                  <label className="form-label fw-semibold">Filter by:</label>
                  <select
                    className="form-select form-control mb-3"
                    aria-label="Default select example"
                  >
                    <option value="1">Table Name</option>
                    <option value="2">Table Name 2</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label fw-semibold">From:</label>
                    <input type="date" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label fw-semibold">To:</label>
                    <input type="date" className="form-control" />
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
                  <th scope="col">Order ID</th>
                  <th scope="col">Table</th>
                  <th scope="col">Waiter</th>
                  <th scope="col">Price</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="col">1</td>
                  <td scope="col">78/79 034</td>
                  <td scope="col">Table 2</td>
                  <td scope="col">Waiter 2</td>
                  <td scope="col">Rs 2,000</td>
                  <td scope="col">2022-01-04</td>
                </tr>
                <tr>
                  <td scope="col">1</td>
                  <td scope="col">78/79 034</td>
                  <td scope="col">Table 2</td>
                  <td scope="col">Waiter 2</td>
                  <td scope="col">Rs 2,000</td>
                  <td scope="col">2022-01-04</td>
                </tr>
                <tr>
                  <td scope="col">1</td>
                  <td scope="col">78/79 034</td>
                  <td scope="col">Table 2</td>
                  <td scope="col">Waiter 2</td>
                  <td scope="col">Rs 2,000</td>
                  <td scope="col">2022-01-04</td>
                </tr>
                <tr>
                  <td scope="col">1</td>
                  <td scope="col">78/79 034</td>
                  <td scope="col">Table 2</td>
                  <td scope="col">Waiter 2</td>
                  <td scope="col">Rs 2,000</td>
                  <td scope="col">2022-01-04</td>
                </tr>
                <tr>
                  <td scope="col">1</td>
                  <td scope="col">78/79 034</td>
                  <td scope="col">Table 2</td>
                  <td scope="col">Waiter 2</td>
                  <td scope="col">Rs 2,000</td>
                  <td scope="col">2022-01-04</td>
                </tr>
                <tr>
                  <td scope="col">1</td>
                  <td scope="col">78/79 034</td>
                  <td scope="col">Table 2</td>
                  <td scope="col">Waiter 2</td>
                  <td scope="col">Rs 2,000</td>
                  <td scope="col">2022-01-04</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
