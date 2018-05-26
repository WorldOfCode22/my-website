import { IAction } from ".";
import { IState } from "../App";

function chatActionListener(comp: React.Component<{}, IState>, action: IAction) {
  const {chat, socket} = comp.state
  switch(action.type) {
    case "CHAT INPUT CHANGE":
      if (action.payload.chat && action.payload.chat.input) {
        chat.userInput = action.payload.chat.input
        comp.setState({chat})
      } else {
        throw new Error("A Chat Object With A Input Key Is Required For The CHAT INPUT CHANGE Event")
      }
      break
    case "SEND CHAT MESSAGE":
      if (action.payload.chat && action.payload.chat.message) {
        chat.messages.push(action.payload.chat.message);
        chat.messages.push("Application: Message is being sent to server")
        socket.socket.emit("MESSAGE TO SERVER", action.payload.chat.message)
        comp.setState({chat});
      } else {
        throw new Error("A Chat Object With A Message Key Is Required For The SEND CHAT MESSAGE Event")
      }
      break
    case "SERVER RECEIVED YOUR MESSAGE":
        chat.messages.push("Application: Server has received your message and is thinking of a reply")
        comp.setState({chat})
      break
    case "SERVER RESPONDED TO YOUR MESSAGE":
      if (action.payload.chat && action.payload.chat.serverMessage){
        chat.messages.push("Server: " + action.payload.chat.serverMessage)
        comp.setState({chat})
      }
  }
}

export default chatActionListener