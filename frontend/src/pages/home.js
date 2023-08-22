import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    useEffect(() => {
        axios.get("http://localhost:8080/login/isValid")
            .then(res => console.log(res))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <p>
                Welcome 
            </p>
        </>
    )
}