import React from "react";

export default function Login() {
    return (
        <>
            <form>
                <label>
                    Email
                </label>
                <input type="email"></input>
                <label>
                    Password
                </label>
                <input type="password"></input>
                <button type="submit">Login</button>
            </form>
        </>
    )
}