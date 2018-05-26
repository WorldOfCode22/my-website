import * as React from 'react'
import { Button, Col, Input, InputGroup} from 'reactstrap';
import { createAction, IAction } from '../../../action-reducers';
import { ApplicationContext } from '../../../App';
import { IChat } from '../../../reducers/chat-reducer';

interface IChatProps {
  actonListener: (action: IAction) => void
  chat: IChat,
  messages: JSX.Element[]
}

const Chat = () => (
  <ApplicationContext.Consumer>
    {state => {
      const messageArray: JSX.Element[] = [] 
      state.chat.messages.forEach((v, i) => {
        messageArray.push(<ChatText chatText={v} key={i} />)
      })
      return <ChatBox chat={state.chat} actonListener={state.actionListener} messages={messageArray} />
    }}
  </ApplicationContext.Consumer>
)

const ChatBox = (props: IChatProps) => (
  <div>
    <ChatBoxHeader />
    {props.messages}
    <ChatBoxInput chat={props.chat} actonListener={props.actonListener} messages={props.messages} />
  </div>
)
const ChatBoxHeader = () => (
  <Col>
    <h3 className="text-center">Server Chatter</h3>
  </Col>
)

interface IText {
  chatText: string
}

const ChatText = (props: IText) => (
  <div>
    <p>{props.chatText}</p>
  </div>
)

const ChatBoxInput = (props: IChatProps) => (
  <InputGroup>
    {/* tslint:disable-next-line:jsx-no-lambda */}
    <Button onClick={(event: React.SyntheticEvent<MouseEvent>) => {
      event.preventDefault()
      props.actonListener(createAction("SEND CHAT MESSAGE", {chat: {message: "You: " + props.chat.userInput}}))
    }}>Send!</Button>
    {/* tslint:disable-next-line:jsx-no-lambda */}
    <Input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()
      props.actonListener(createAction("CHAT INPUT CHANGE", {chat: {input: event.target.value}}))
    }}/>
  </InputGroup>
)

export default Chat