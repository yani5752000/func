import React from "react";
import Message from "./Message";

export default function Messages({messages}) {
    return (
        <>
           <ol>
            {
                messages.map((message) => {
                    return(
                        <li key={message.id}>
                        <Message id={message.id} message={message.message} />
                    </li>
                    )
                })
            }
           </ol>
        </>
    )
}