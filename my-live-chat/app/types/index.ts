// Represents a user in the system.
export interface User {
    id: string;
    name?: string;
    email?: string;
    emailVerified?: Date;
    image?: string;
    hashedPassword?: string;
    createdAt: Date;
    updatedAt: Date;
  
    // Array of IDs linking to conversations
    conversationIds: string[];
    // Conversations the user is part of
    conversations: Conversation[];
  
    // Array of IDs of messages seen by the user
    seenMessageIds: string[];
    // Messages that have been marked as seen by the user
    seenMessages: Message[];
  
    // Messages sent by the user
    messages: Message[];
  }
  
  // Represents a message in a conversation.
  export interface Message {
    id: string;
    body?: string;
    image?: string;
    createdAt: Date;
  
    // Array of IDs of users who have seen this message
    seenIds: string[];
    // Users who have seen this message
    seen: User[];
  
    // ID of the conversation this message belongs to
    conversationId: string;
  
    // ID of the sender of this message
    senderId: string;
    // Sender of the message
    sender: User;
  }
  
  // Represents a conversation between users.
  export interface Conversation {
    id: string;
    createdAt: Date;
    lastMessageAt: Date;
    name?: string;
    isGroup?: boolean;
  
    // Array of IDs of messages in the conversation
    messagesIds: string[];
    // Messages in the conversation
    messages: Message[];
  
    // Array of IDs of users in the conversation
    userIds: string[];
    // Users who are part of the conversation
    users: User[];
  }
  
    
export type FullMessageType = Message & {
  sender: User;
  seen: User[];
};

export type FullConversationType = Conversation & {
  users: User[];
  messages: FullMessageType[];
};