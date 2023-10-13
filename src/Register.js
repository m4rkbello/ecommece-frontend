import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Navigate=useNavigate();

    async function handleRegisterSubmit() {
        try {
            let item = { name, email, password };

            let result = await fetch("http://localhost:8000/api/register", {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            });

            if (result.ok) {
                result = await result.json();
                alert("User successfully registered!");
                console.log("DATA", result);
                localStorage.setItem("user-info=", JSON.stringify(result))
                Navigate("/add")
                

            } else {
                // Handle non-successful response (e.g., server error, etc.)
                console.error("Failed to register user:", result.statusText);
            }
        } catch (error) {
            console.error("An error occurred during registration:", error);
        }
    }

    return (
        <div className="col-sm-6 offset-sm-3">
            <h1>Register</h1>
            <br />
            <input type="text" className="form-control" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <input type="text" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button className="btn btn-primary" onClick={handleRegisterSubmit}>Register</button>
        </div>
    );
}

export default Register;
