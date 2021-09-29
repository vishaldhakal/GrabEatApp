import Link from "./ActiveLink";

export default function Navbar(props) {
  return (
    <>
      <nav className={"navbar navbar-dark py-3 sticky-top " + props.shadow}>
        <div className="container-fluid d-flex justify-content-between">
          <div>
            <a href="/" className="navbar-brand text-dark">
              Digital Menu
            </a>
          </div>
          <div className="d-none d-md-block">
            <ul className="mynav me-auto mb-2 mb-lg-0 d-flex">
              <li className="nav-item me-3">
                <Link href="/">
                  <a className="nav-link" aria-current="page">
                    Menu
                  </a>
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link href="/cart">
                  <a className="nav-link">Cart</a>
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link href="/orders">
                  <a className="nav-link">Orders</a>
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link href="#">
                  <a className="nav-link">Payment</a>
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link href="/login">
                  <a className="nav-link">Account</a>
                </Link>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link waitercallbtn" href="#">
                  Call Waiter
                </a>
              </li>
              <li className="nav-item">
                <button className="btn nav-link menubtn">
                  <svg
                    width="21"
                    height="17"
                    viewBox="0 0 21 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path d="M0 1H20.537" stroke="#045762" strokeWidth="2" />
                      <path
                        d="M0 8.08499H20.537"
                        stroke="#045762"
                        strokeWidth="2"
                      />
                      <path
                        d="M0 15.169H20.537"
                        stroke="#045762"
                        strokeWidth="2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="20.537" height="16.169" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
