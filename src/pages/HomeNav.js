function HomeNav() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <div className="" id="navbarNav">
          <ul className="navbar-nav align-items-center">
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

export default HomeNav;
