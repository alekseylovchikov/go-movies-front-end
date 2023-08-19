import { Link } from 'react-router-dom';

export const Navbar = ({ jwtToken }) => {
  return (
    <div>
      <nav>
        <div className="flex gap-0-5 flex-wrap">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/links">
            Links
          </Link>
          <Link className="link" to="/genres">
            Genres
          </Link>
          {jwtToken !== '' && (
            <>
              <Link className="link" to="/admin/movie/0">
                Add Movie
              </Link>
              <Link className="link" to="/manage-catalogue">
                Manage Catalogue
              </Link>
              <Link className="link" to="/graphql">
                GraphQL
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};
