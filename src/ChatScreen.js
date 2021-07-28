import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import "./ChatScreen.css";

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Yamini',
            image: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            message: 'hey ! how are you',
        },
        {
            name: 'Yamini',
            image: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMGdpcmx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            message:'Hows it going!',
        },
        {
            message: 'hi! im goood Wbu..?'
        },
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, { message: input }]);
        setInput("");
    };

    return (
        <div className="chatscreen">
            <p className="chatscreen_timestamp">YOU MATCHED WITH YAMINI ON 10/05/21</p>
            {messages.map((message) => 
                message.name ? (
                    <div className="chatscreen_message">
                    <Avatar className="chatscreen_image" alt={message.name} src={message.image} />
                    <p className="chatscreen_text">{message.message}</p>
                    </div>
                 
                ) : (
                    <div className="chatscreen_message">
                    <p className="chatscreen_textuser">{message.message}</p>
                    </div>

                )
                 
            )
            }
            <div >
                <form className="chatscreen_input">

                    <input
                     value={input}
                     onChange={e => setInput(e.target.value)}
                    className="chatscreen_inputfield" placeholder="Type a massage..." type="text" />
                    <button onClick={handleSend} type="submit" className="chatscreen_inputbutton">SEND</button>
                </form>
            </div>
        </div>
    );
}

export default ChatScreen
