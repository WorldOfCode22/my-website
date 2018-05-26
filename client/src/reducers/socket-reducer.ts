import * as io from "socket.io-client";
import { createAction } from "../action-reducers";
import { IState } from "../App";
import { getEnvironment } from "./env";

export interface ISocket {
  socket: SocketIOClient.Socket
}

export function getSocketDefaults (comp: React.Component<{}, IState>): ISocket {
  if (getEnvironment().mode === "DEVELOPMENT") {
    return setUpSocket(comp, io("http://localhost:4000"))
  } else {
    return setUpSocket(comp, io("/")) 
  }
}

export function setUpSocket (comp: React.Component<{}, IState>, socket: SocketIOClient.Socket): ISocket {
  socket.on("SERVER RECEIVED USER MESSAGE", () => {
    comp.state.actionListener(createAction("SERVER RECEIVED YOUR MESSAGE", {}))
  })

  socket.on("SERVER RESPONDED TO USER MESSAGE", (serverMessage: string) => {
    comp.state.actionListener(createAction("SERVER RESPONDED TO YOUR MESSAGE", {chat: {serverMessage}}))
  })

  return {socket}
}
