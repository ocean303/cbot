import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from './components/BotAvatar';
import Options from './components/options';
import TimeTable from './components/timetable';
const config = {
  initialMessages: [
    createChatBotMessage(`Welcome to SBMP Help Assistant`,{
      widget: "options",
    }),
  ],
  botName: "Help Assistant",
  customComponents: {
      botAvatar: (props) => <BotAvatar {...props} />
  },
  
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,

    },
    {
      widgetName: "timetable",
      widgetFunc: (props) => <TimeTable {...props}/>
    }
  ],
};

export default config;