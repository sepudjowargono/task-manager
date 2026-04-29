// navigation bar component that connects to Auth0 for login/logout
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0(); // gets useful auth functions and state from Auth0

  return (
    <nav className="navbar">
      <h2>Task Manager</h2>

      <div className="nav-link">
        {isAuthenticated && (
          <div className="nav-links">
            <Link to="/">Dashboard</Link>
            <Link to="/create">Create Task</Link>
          </div>
        )}

        {isAuthenticated && user && <span>Welcome, {user.name}!</span>}

        {!isAuthenticated ? (
          <button onClick={() => loginWithRedirect()}>Login</button>
        ) : (
          <button
            onClick={() =>
              logout({
                logoutParams: {
                  returnTo: window.location.origin,
                },
              })
            }
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
