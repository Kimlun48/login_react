

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Api from '../../api';
// import { useHistory } from 'react-router-dom'; // Perlu diimpor jika Anda ingin menggunakan useHistory

// import { useHistory } from 'react-router-dom';


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [validation, setValidation] = useState({});
    // const history = useHistory(); // Gunakan useHistory untuk mengakses objek history
    // const history = useHistory();
    const navigate = useNavigate();

    const loginHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await Api.post('/api/token', {
                username: username,
                password: password
            });

            localStorage.setItem('token', response.data.access);
            localStorage.setItem('refreshToken', response.data.refresh);

            navigate("/dashboard");

          //  history.push('/dashboard'); // Redirect ke dashboard setelah berhasil login
        } catch (error) {
            if (error.response) {
                setValidation(error.response.data);
            } else {
                console.error('Login error:', error);
            }
        }
    };

    return (
        <div className="container" style={{ marginTop: "120px" }}>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card border-0 rounded shadow-sm">
                        <div className="card-body">
                            <h4 className="fw-bold">LOGIN</h4>
                            <hr/>
                            {validation.message && (
                                <div className="alert alert-danger">
                                    {validation.message}
                                </div>
                            )}
                            <form onSubmit={loginHandler}>
                                <div className="mb-3">
                                    <label className="form-label">USERNAME</label>
                                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Masukkan Username"/>
                                    {validation.username && (
                                        <div className="alert alert-danger">
                                            {validation.username[0]}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">PASSWORD</label>
                                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password"/>
                                    {validation.password && (
                                        <div className="alert alert-danger">
                                            {validation.password[0]}
                                        </div>
                                    )}
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="submit" className="btn btn-primary">LOGIN</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;



