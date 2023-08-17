import React from "react";
import { useState, useEffect } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [word, setWord] = useState("");
    useEffect(() => {
        setWord(email)
    }, [email]);
    return (
        <>
            <form>
                <label>
                    Email
                </label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}></input>
                <label>
                    Password
                </label>
                <input type="password"></input>
                <button type="submit">Login</button>
            </form>
            <p>word: { word }</p>
        </>
    )
}