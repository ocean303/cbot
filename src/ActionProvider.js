class ActionProvider {
  constructor(createChatBotMessage,setStateFunc) 
  {
   this.createChatBotMessage = createChatBotMessage;
   this.setState = setStateFunc;
  }

  GreetHandler = () => {
    const message = this.createChatBotMessage("Welcome!")
    this.setChatbotMessage(message)
  }

  IdHandler = () => {
    const message = this.createChatBotMessage("Click on the Link",{
      widget: "timetable"
    })
    this.setChatbotMessage(message)
  }

  CSEhand = () => {
    const message = this.createChatBotMessage("Welcome to CSE Department")
    this.setChatbotMessage(message)
  }

  elseHandler = () => {
    const message = this.createChatBotMessage("Sorry Did not get you")
    this.setChatbotMessage(message)
  }

  setChatbotMessage = (message) => {
     this.setState(state => ({ ...state, messages: [...state.messages, message]})) 
  }

}

export default ActionProvider;