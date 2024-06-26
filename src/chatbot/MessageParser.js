class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('שלום')) {
      this.actionProvider.greet();
    } else {
      this.actionProvider.handleDefault();
    }
  }
}

export default MessageParser;
