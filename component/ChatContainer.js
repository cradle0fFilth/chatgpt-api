import React from "react";
import { Button, TextField } from "@mui/material";

export const ChatContainer = () => {
    const [pendingMessage, setPendingMessage] = React.useState("");
    const [messages, setMessages] = React.useState("");
    return(
        <div id="chat-container">
            <h1>Chat Container</h1>
            <TextField type="text" onChange={(e)=>{
                setPendingMessage(e.target.value);
            }
            }/>
            <Button variant="outlined" onClick={()=>{
                setMessages(pendingMessage);
                setPendingMessage("");
            }}>send</Button>
            <p>{messages}</p>
        </div>
    )
}