import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get("http://localhost:8080/login/isValid")
            .then(res => {
                console.log(res);
                if (res.data.valid) {
                    navigate("/");
                } 
            })
            .catch(error => console.log(error));
    }, []);

    const handelLoginSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/login", {email, password})
            .then(result => {
                console.log(result);
                if(result.data.loggedIn) {
                    navigate("/");
                } else {
                    alert("No record");
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <form onSubmit={(e) => handelLoginSubmit(e)}>
                <label>
                    Email
                </label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
                <label>
                    Password
                </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit">Login</button>
            </form>
        </>
    )
}