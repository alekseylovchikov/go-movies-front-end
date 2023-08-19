import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <div>
        <div>
          <Link to="/" className="text-logo-link mb-1">
            useful links
          </Link>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Link className="link" to="/login">
            Login
          </Link>
        </div>
      </div>
      <div>
        <div>
          <nav>
            <div className="flex gap-0-5">
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="/movies">
                Movies
              </Link>
              <Link className="link" to="/genres">
                Genres
              </Link>
              <Link className="link" to="/admin/movie/0">
                Add Movie
              </Link>
              <Link className="link" to="/manage-catalogue">
                Manage Catalogue
              </Link>
              <Link className="link" to="/graphql">
                GraphQL
              </Link>
            </div>
          </nav>
        </div>
        <div className="mt-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
