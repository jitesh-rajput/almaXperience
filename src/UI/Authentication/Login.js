import React,{useState,useEffect} from "react";
import Alert from "../Components/Alert";
import { Link, Navigate } from 'react-router-dom';
import './Authentication.css';
import CheckLogin from "../../Firebase/CheckLogin";
import { useAuth } from "../../Context/AuthContext";

const Login = () => {
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);
  const [email, setEmail] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { login } = useAuth();

  const loginUser = async (event) => {
    event.preventDefault();
    console.log({ email, password });
    const loginError = await CheckLogin({ email, password }, login);
    setError(loginError);
  };

  if (currentUser || error === "Login") {
    return <Navigate to="/feed" replace={true} />;
  }

  return (
    <div>
      <div className="container-fluide header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand logo">
                AlmaXperience
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <div className="sign-bg">
        <div className="row py-4">
          <div className="text-center py-2">
            <h2>Login</h2>
          </div>

          {error ? <Alert error={error} /> : ''}

          <div className="col-10 col-sm-6 col-lg-4 m-auto">
            <form onSubmit={loginUser}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  aria-describedby="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn my-2 mx-5 ">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row text-center">
          <Link
            className="text-decoration-none"
            to="/forgetpassword"
            style={{ color: " rgb(26, 236, 250)" }}
          >
            Forget Password ?
          </Link>
          <Link
            to="/signup"
            className="text-decoration-none"
            style={{ color: " rgb(26, 236, 250)" }}
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;