// src/chatbot/ActionProvider.js

import axios from 'axios';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async handleOpenAIMessage(userMessage) {
    const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: userMessage,
          max_tokens: 150
        },
        {
          headers: {
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      const botMessage = response.data.choices[0].text.trim();
      this.addBotMessageToState(botMessage);
    } catch (error) {
      console.error('OpenAI API error:', error);
      this.addBotMessageToState('מצטערים, לא הצלחנו לעבד את ההודעה שלך.');
    }
  }

  addBotMessageToState = (botMessage) => {
    const message = this.createChatBotMessage(botMessage);
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message]
    }));
  };
}

export default ActionProvider;
