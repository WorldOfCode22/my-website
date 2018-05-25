import * as io from "socket.io-client";
import { IState } from "../App";
import { getEnvironment } from "./env";

export interface ISocket {
  socket: SocketIOClient.Socket
}

export function getSocketDefaults (comp: React.Component<{}, IState>): ISocket {
  if (getEnvironment().mode === "DEVELOPMENT") {
    return {socket: io("http://localhost:4000")}
  } else {
    return {socket: io("/")}
  }
}
