import React from "react";

export default function Message({ id, message }) {
    return (
        <>
            <p>
                id: {id} , message: {message}
            </p>
        </>
    )
}