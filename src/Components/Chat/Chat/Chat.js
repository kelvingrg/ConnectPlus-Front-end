import React, {useRef, useState} from "react";
// import LogoSearch from "../../components/LogoSearch/LogoSearch";
// import NavIcons from "../../components/NavIcons/NavIcons";
import "./Chat.css";
import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {io} from "socket.io-client";
import axios from "../../../Config/Axios";

import ChatBox from "../ChatBox/ChatBox";
import Conversation from "../Conversation/Conversation";
import HomeNavbar from "../../Navbar/HomeNavbar";

const Chat = () => {
    const dispatch = useDispatch();
    const socket = useRef();
    const {userData} = useSelector((state) => state ?. login);

    const [chats, setChats] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [sendMessage, setSendMessage] = useState(null);
    const [receivedMessage, setReceivedMessage] = useState(null);
    // Get the chat in chat section
    useEffect(() => {
        const getChats = async () => {
            try {
                const {data} = await axios.get(`/chat/${
                    userData._id
                }`);
                setChats(data);
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        };
        getChats();
    }, [userData._id]);

    // Connect to Socket.io
    useEffect(() => {
        socket.current = io("ws://localhost:8800");
        socket.current.emit("new-user-add", userData._id);
        socket.current.on("get-users", (userData) => {
            setOnlineUsers(userData);
        });
    }, [userData]);

    // Send Message to socket server
    useEffect(() => {
        if (sendMessage !== null) {
            socket.current.emit("send-message", sendMessage);
        }
    }, [sendMessage]);


    // Get the message from socket server
    useEffect(() => {
        socket.current.on("recieve-message", (data) => {
            console.log(data)
            setReceivedMessage(data);
        });
    }, []);


    const checkOnlineStatus = (chat) => {
        const chatMember = chat.members.find((member) => member !== userData._id);
        const online = onlineUsers.find((userData) => userData.userId === chatMember);
        return online ? true : false;
    };

    return (
    <>
    <HomeNavbar/>
    <div className="Chat pt-20"> {/* Left Side */}
        <div className="Left-side-chat"> {/* <LogoSearch /> */}
            <div className="Chat-container">
                <h2>Chats</h2>
                <div className="Chat-list"> {
                    chats.map((chat) => (<div onClick={
                        () => {
                            setCurrentChat(chat);
                        }
                    }>
                        <Conversation data={chat}
                            currentUser={
                              userData._id
                            }
                            online={
                                checkOnlineStatus(chat)
                            }/>
                    </div>))
                } </div>
            </div>
        </div>

        {/* Right Side */}

        <div className="Right-side-chat">
            <div style={
                {
                    width: "20rem",
                    alignSelf: "flex-end"
                }
            }>
  
            </div>
            <ChatBox chat={currentChat}
                currentUser={
                  userData._id
                }
                setSendMessage={setSendMessage}
                receivedMessage={receivedMessage}/>
        </div>
    </div>
    
    </>
    );
};

export default Chat;
