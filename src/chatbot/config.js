import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  initialMessages: [createChatBotMessage(`שלום! איך אני יכול לעזור לך היום?`)],
  botName: 'KA Bot',
  customStyles: {
    botMessageBox: {
      backgroundColor: '#0D0D0D',
    },
    chatButton: {
      backgroundColor: '#D9A25F',
    },
  },
};

export default config;
