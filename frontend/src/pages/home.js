import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get("http://localhost:8080/login/isValid")
            .then(res => {
                console.log(res);
                if (res.data.valid) {
                    setName(res.data.username);
                } else {
                    navigate("/login");
                }
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <p>
                Welcome {name}
            </p>
        </>
    )
}