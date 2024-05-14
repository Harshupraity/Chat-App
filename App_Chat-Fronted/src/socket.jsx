import { createContext, useMemo, useContext } from "react";
import io from "socket.io-client";
import { server } from "./constants/config";
// import { getSocket, useSocketEvents } from "./hooks";

const SocketContext = createContext();



const getSocket = () => useContext(SocketContext);

const SocketProvider = ({ children }) => {
  const socket = useMemo(() => io(server, { withCredentials: true }), []);
  console.log(socket);
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export { SocketProvider, getSocket };