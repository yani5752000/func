import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [word, setWord] = useState("");
    useEffect(() => {
        setWord(email)
    }, [email]);
    useEffect(() => {
        setPassword(password)
    }, [password]);

    const handelLoginSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/login", {email, password})
            .then(result => {
                console.log(result);
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
            <p>word: { word }</p>
        </>
    )
}