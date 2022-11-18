export default function Sidebar(props) {
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link " href="/admin">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link collapsed">
              <i className="bi bi-cart"></i>
              <span>Manage Order</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link collapsed">
              <i className="bi bi-credit-card"></i>
              <span>Payments</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="/admin/tables">
              <i className="bi bi-layout-text-window-reverse"></i>
              <span>Tables </span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="/admin/users">
              <i className="bi bi-person"></i>
              <span>Users</span>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#icons-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-list-check"></i>
              <span>Inventory</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="icons-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="/admin/supplier">
                  <i className="bi bi-circle"></i>
                  <span>Supplier</span>
                </a>
              </li>
              <li>
                <a href="/admin/ingredients">
                  <i className="bi bi-circle"></i>
                  <span>Manage Ingredients</span>
                </a>
              </li>
              <li>
                <a href="/admin/purchase">
                  <i className="bi bi-circle"></i>
                  <span>Add Purchase</span>
                </a>
              </li>
              <li>
                <a href="/admin/stock-out">
                  <i className="bi bi-circle"></i>
                  <span>Stock Out Ingerdients</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="#">
              <i className="bi bi-bar-chart"></i>
              <span>Reports</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#food-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-hexagon"></i>
              <span>Food Management</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="food-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="/admin/food-category">
                  <i className="bi bi-circle"></i>
                  <span>Manage Category</span>
                </a>
              </li>
              <li>
                <a href="/admin/food-item">
                  <i className="bi bi-circle"></i>
                  <span>Manage Food</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="/admin/vat-and-tax">
              <i className="bi bi-question-circle"></i>
              <span>Vats and Taxes</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#setting-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <i className="bi bi-question-circle"></i>
              <span>Setting</span>
              <i className="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul
              id="setting-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="/admin/bank-list">
                  <i className="bi bi-circle"></i>
                  <span>Bank List </span>
                </a>
              </li>
              <li>
                <a href="/admin/bank-transaction">
                  <i className="bi bi-circle"></i>
                  <span>Bank Transaction</span>
                </a>
              </li>
              <li>
                <a href="/admin/payment-methods">
                  <i className="bi bi-circle"></i>
                  <span>Payment Methods</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
}
