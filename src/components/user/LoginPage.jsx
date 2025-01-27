import React, { useContext, useState } from 'react'
import './LoginPage.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { api } from '../../api';
import Error from '../ui/Error'
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const {setIsAuthenticated, get_username} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    const data = { username, password };

    api.post("api/token/", data)
      .then(res => {
        toast.success("You are logged in now!", {autoClose: 3000});
        setLoading(false);
        console.log(res.data);
        // Store the access and refresh tokens
        localStorage.setItem('access', res.data.access);
        localStorage.setItem('refresh', res.data.refresh);
        setUsername("");
        setPassword("");
        setIsAuthenticated(true);
        get_username()
        // After successful login, get the 'from' location (if provided by ProtectedRoute)
        const from = location.state?.from || '/'

        // Redirect to the previous page (checkout) or default to home
        navigate(from, { replace: true });
      })
      .catch(err => {
        console.log(err.message);
        setError("Error in Authentiaction", err.message);
      })
  }

  if (error !== ""){
    return <Error error={error} />
  }

  return (
    <section style={{ paddingTop: '80px', height: '90vh' }}>
      <div className="login-container my-5">
        <div className="login-card shadow">
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Gain access to your account</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className='form-label text-sm'>Username</label>
              <input type="username" value={username} onChange={(e) => setUsername(e.target.value)} className='form-control' id='email' placeholder='Enter your username' required />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Enter your password" required />
            </div>

            <button type='submit' className="btn btn-dark btn-d w-100" disabled={loading}>Login</button>
          </form>
          <div className="login-footer">
            <p>Do not have an account? <Link to="/register">Sign up</Link></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginPage