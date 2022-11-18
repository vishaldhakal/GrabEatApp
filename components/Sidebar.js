export default function Sidebar(props) {
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link " href="index.html">
              <span>Dashboard</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="manage-order.html" className="nav-link collapsed">
              <span>Orders</span>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#forms-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <span>Payments</span>
            </a>
            <ul
              id="forms-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="forms-elements.html">
                  <span>Form Elements</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#tables-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <span>Tables</span>
            </a>
            <ul
              id="tables-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="tables-general.html">
                  <span>General Tables</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#charts-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <span>Users</span>
            </a>
            <ul
              id="charts-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="charts-chartjs.html">
                  <span>Chart.js</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-bs-target="#icons-nav"
              data-bs-toggle="collapse"
              href="#"
            >
              <span>Inventory</span>
            </a>
            <ul
              id="icons-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="icons-bootstrap.html">
                  <span>Bootstrap Icons</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="users-profile.html">
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
              <span>Food Management</span>
            </a>
            <ul
              id="food-nav"
              className="nav-content collapse "
              data-bs-parent="#sidebar-nav"
            >
              <li>
                <a href="manage-category.html">
                  <span>Manage Category</span>
                </a>
              </li>
              <li>
                <a href="charts-chartjs.html">
                  <span>Manage Food</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link collapsed" href="pages-faq.html">
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
