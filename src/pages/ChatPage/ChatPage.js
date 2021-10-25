import React from 'react'

import {
  ChatEngine, ChatCard, NewChatForm,
  ChatFeed, ChatHeader, MessageBubble, IsTyping, NewMessageForm,
} from 'react-chat-engine';


const ChatPage = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName={process.env.REACT_APP_USERNAME_CHATENGINE}
      userSecret={process.env.REACT_APP_USER_SECRET_KEY}

      // affichage des composants voulus
      renderChatList={(chatAppState) => { }}
      renderChatCard={(chat, index) => <ChatCard key={`${index}`} chat={chat} />}
      renderNewChatForm={(creds) => <NewChatForm creds={creds} />}
      renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
      renderChatHeader={(chat) => <ChatHeader />}
      renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => <MessageBubble lastMessage={lastMessage} message={message} nextMessage={nextMessage} chat={chat} />}
      renderIsTyping={(typers) => <IsTyping />}
      renderNewMessageForm={(creds, chatID) => <NewMessageForm />}
      renderChatSettings={(chatAppState) => { }}
      renderChatSettingsTop={(creds, chat) => { }}
      renderPeopleSettings={(creds, chat) => { }}
      renderPhotosSettings={(chat) => { }}
      renderOptionsSettings={(creds, chat) => { }}
    />
  )
}

export default ChatPage;