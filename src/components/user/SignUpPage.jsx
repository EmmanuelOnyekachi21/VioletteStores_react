import { Link, useNavigate } from "react-router-dom"
import "./LoginPage.css"
import { useState } from "react"
import { api } from "../../api"
import { toast } from "react-toastify"

const SignUpPage = () => {
    const [formData, setFormData] = useState(
        {
            username: "",
            email: "",
            password: "",
            password2: "",
            first_name: "",
            last_name: ""
        }
    )
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }
    function handleSubmit(e) {
        e.preventDefault();
        // console.log(formData);
        setLoading(true);
        api.post("core/register/", formData)
            .then(res => {
                setLoading(false);
                // console.log(res.data);
                toast.success("Registration successful!")
                navigate('/login');
            })
            .catch(err => {
                setLoading(false);
                console.log(err.response?.data.username)
                if (err.response?.data.username) {
                    err.response?.data.username.forEach(username => {
                        toast.error(username, { autoClose: 3000 });
                    })
                } else if (err.response?.data?.email) {
                    err.response?.data.email.forEach(email => {
                        toast.error(email, { autoClose: 3000 });
                    })
                } else if (err.response?.data?.password) {
                    err.response?.data.password.forEach(password => {
                        toast.error(password, { autoClose: 3000 });
                    })
                } else {
                    toast.error("Registration failed. Please try again.");
                }
            })
    }

    return (
        <div className="login-container my-5">
            <div className="login-card shadow">

                <h2 className="login-title">Create an account.</h2>
                <p className="login-subtitle">Become a valued member at VioletteStores!</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input onChange={handleChange} type="email" className="form-control" id="email" placeholder="Enter your email" value={formData.email} required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input onChange={handleChange} type="text" className="form-control" id="username" placeholder="Enter your username" value={formData.username} required />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="firstname" className="form-label">firstname</label>
                        <input onChange={handleChange} type="text" className="form-control" id="first_name" placeholder="Enter your firstname" value={formData.first_name} required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">lastname</label>
                        <input onChange={handleChange} type="text" className="form-control" id="last_name" placeholder="Enter your lastname" value={formData.last_name} required />
                    </div>



                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input onChange={handleChange} type="password" className="form-control" id="password" placeholder="Enter your password" value={formData.password} required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                        <input onChange={handleChange} type="password" className="form-control" id="password2" placeholder="Confirm your password" value={formData.password2} required />
                    </div>

                    <button type="submit" disabled={loading} className="btn btn-primary w-100">Create account</button>
                </form>
                <div className="login-footer">
                    <p>Already have an account? <Link to="/login">Sign in</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage
