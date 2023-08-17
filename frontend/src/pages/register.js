import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [word, setWord] = useState("");
    useEffect(() => {
        setWord(email)
    }, [email]);

    const handelRegisterSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/register", {username, email, password})
            .then(result => {
                console.log(result);
            })
            .catch(error => console.log(error));
    }


    return (
        <>
            <form onSubmit={e => handelRegisterSubmit(e)}>
                <label>
                    Name
                </label>
                <input type="text" onChange={e => setUsername(e.target.value)}></input>
                <label>
                    Email
                </label>
                <input type="email" onChange={e => setEmail(e.target.value)}></input>
                <label>
                    Password
                </label>
                <input type="password" onChange={e => setPassword(e.target.value)}></input>
                <button type="submit">Register</button>
            </form>
        </>
    )
}