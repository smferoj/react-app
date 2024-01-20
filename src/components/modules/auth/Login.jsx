import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Constants from '../../Constants';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({});
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleInput = (e) => {
        setInput(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const handleLogin = (e) => {
        e.preventDefault();  
        setIsLoading(true);
        axios.post(`${Constants.BASE_URL}/login`, input)
            .then(res => {
                localStorage.email = res.data.email;
                localStorage.name = res.data.name;
                localStorage.photo = res.data.photo;
                localStorage.phone = res.data.phone;
                localStorage.token = res.data.token;
                setIsLoading(false);
                window.location.reload();
            })
            .catch(errors => {
                setIsLoading(false);
                 if(errors.response.satus = 422){
                    setErrors(errors.response.data.errors);
                 }
            });
    }

    return (
        <div className="container mt-5 pt-5" >
            <div className="row">
                <div className="col-lg-5 mx-auto">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-floating mb-3">
                                    <input className="form-control" type="email" name={'email'} value={input.email} onChange={handleInput} />
                                    <label htmlFor="inputEmail">Email address <span className='text-danger'>*</span> 
                                    </label>
                                    <p className='text-danger'> {errors.email != undefined ? errors.email[0] :null}</p>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" type="password" name={'password'} value={input.password} onChange={handleInput} placeholder="name@example.com" />
                                    <label htmlFor="inputEmail">Password  <span className='text-danger'> * </span> </label>
                                    <p className='text-danger'> {errors.password != undefined ? errors.password[0] :null}</p>
                                </div>

                                <div className="form-check mb-3">
                                    <input className="form-check-input" id="inputRememberPassword" type="checkbox" defaultValue />
                                    <label className="form-check-label" htmlFor="inputRememberPassword"> Remember Password </label>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                    <button type='submit' className="btn btn-primary" dangerouslySetInnerHTML={{__html:isLoading?' <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading....': 'Login'}}/>

                                    <a className="small" href="password.html">Forgot Password?</a>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-center py-3">
                            <div className="small"><a href="register.html">Need an account? Sign up!</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;

