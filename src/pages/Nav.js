function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                <i class="bi bi-house"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i class="bi bi-person-circle"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i class="bi bi-code"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i class="bi bi-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
