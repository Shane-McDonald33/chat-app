import React, { useState } from "react";
import "./home.scss";
import { Link } from "react-router-dom";

function Homepage ({socket}) {
    const [username, setusername] = useState('');
    const [roomname, setroomname] = useState('');
    //activates joinRoom function defined on the backend
    const sendData = () => {
        if (username !== ' && roomname !== ') {
            socket.emit('joinRoom', { username, roomname});
            //if empty error message pops up and returns to the same page
        }else{
            alert('you must have username and roomname');
            window.location.reload();
        }
    };

    return (
        <div className='homepage'>
            <h1>Welcome to the Damn Chat</h1>
            <input placeholder='Add Your Username' value={username} 
            onChange={(e) => setusername(e.target.value)}></input>
            <input placeholder='Add the Room Name' value={roomname} 
            onChange={(e) => setroomname(e.target.value)}></input>
            <Link to={`/chat/${roomname}/${username}`}>
                <button onClick={sendData}>Join the Conversation</button>
            </Link>
        </div>
    );
};

export default Homepage