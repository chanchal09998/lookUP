// socket.js
import { io } from "socket.io-client";

const socket = io("https://lookup-1.onrender.com", {
  transports: ["websocket"], // ensures a clean websocket connection
  autoConnect: false,
});

export default socket;
