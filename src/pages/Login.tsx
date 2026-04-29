// Login page component
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="page">
      <h1>Login</h1>
      <p>Login to manage your tasks.</p>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  );
};

export default Login;
