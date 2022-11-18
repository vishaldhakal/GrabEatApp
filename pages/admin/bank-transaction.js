import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function Banktransaction() {
  return (
    <>
      <Header></Header>
      <Sidebar></Sidebar>
      <main id="main" className="main">
        <section>
          <div className="d-flex justify-content-between pb-4 pt-2 px-1 px-md-5">
            <h4 className="fw-bold px-1">Bank Transactions</h4>
          </div>
          <div className="row px-1 px-md-5">
            <div className="col-lg-4">
              <label className="form-label fw-semibold">Filter by:</label>
              <select
                className="form-select form-control mb-3"
                aria-label="Default select example"
              >
                <option value="1">Bank Name</option>
                <option value="2">Bank Name 2</option>
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
          <div className="px-1 px-md-5 pt-5">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">SN</th>
                  <th scope="col">Payment ID</th>
                  <th scope="col">Date</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Bank Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td> #78/79 34</td>
                  <td> 11/18/2022</td>
                  <td>
                    {" "}
                    Rs.<span>5000</span>
                  </td>
                  <td> Bank 1</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td> #78/79 35</td>
                  <td> 11/19/2022</td>
                  <td>
                    {" "}
                    Rs.<span>4000</span>
                  </td>
                  <td> Bank 2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
