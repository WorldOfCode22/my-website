
export interface IChat {
  userInput: string
  messages: string[]
}

function getChatDefaults (): IChat {
  return {
    messages: [],
    userInput: "",
  }
}

export default getChatDefaults