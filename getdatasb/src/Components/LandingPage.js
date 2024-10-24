import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div style={{justifyContent:"space-evenly"}}>
          <Link className="navbar-brand" to="/metainfo">
            UserManagement
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/postuserdata"
                >
                  Adduser
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/getallusers">
                  Getallusers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/getuserbyname">
                  GetuserbyName
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/deletebyid">
                  Deletebyid
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/changepassword">
                Changepassword
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Homepage
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
}

export default LandingPage;
