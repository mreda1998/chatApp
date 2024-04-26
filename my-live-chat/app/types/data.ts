import { User, Conversation, Message } from './index'; // Assuming interfaces are exported from 'models.ts'

// Sample users
export const users: User[] = [
  {
    id: "user1",
    name: "Dr Johnson ",
    email: "alice@chum.com",
    createdAt: new Date(),
    updatedAt: new Date(),
    conversationIds: ["conv1"],
    conversations: [],
    seenMessageIds: [],
    seenMessages: [],
    messages: []
  },
  {
    id: "user2",
    name: "Patient Emily",
    email: "emily@livewell.com",
    createdAt: new Date(),
    updatedAt: new Date(),
    conversationIds: ["conv1"],
    conversations: [],
    seenMessageIds: [],
    seenMessages: [],
    messages: []
  }
];

// Sample messages
export const messages: Message[] = [
  {
    id: "msg1",
    body: "Hi, how can I help you today?",
    createdAt: new Date(),
    seenIds: [],
    seen: [],
    conversationId: "conv1",
    senderId: "user1",
    sender: users[0]
  },
  {
    id: "msg2",
    body: "I didn't get my prescription",
    createdAt: new Date(),
    seenIds: [],
    seen: [],
    conversationId: "conv1",
    senderId: "user1",
    sender: users[0]
  },
    {
        id: "msg3",
        body: "I'm sorry to hear that. Can you provide me with your name and date of birth?",
        createdAt: new Date(),
        seenIds: [],
        seen: [],
        conversationId: "conv1",
        senderId: "user1",
        sender: users[0]
    },
    {
        id: "msg4",
        body: "My name is Emily and my date of birth is 15/02/1995",
        createdAt: new Date(),
        seenIds: [],
        seen: [],
        conversationId: "conv1",
        senderId: "user2",
        sender: users[1]
    },
    {
        id: "msg5",
        body: "Thank you, Emily. I will check your records now",
        createdAt: new Date(),
        seenIds: [],
        seen: [],
        conversationId: "conv1",
        senderId: "user1",
        sender: users[0]
    },
    {
        id: "msg6",
        body: "I have found your prescription. I will send it to you now",
        createdAt: new Date(),
        seenIds: [],
        seen: [],
        conversationId: "conv1",
        senderId: "user1",
        sender: users[0]
    },
    {
        id: "msg7",
        body: "Thank you, Dr Johnson",
        createdAt: new Date(),
        seenIds: [],
        seen: [],
        conversationId: "conv1",
        senderId: "user2",
        sender: users[1]
    }
];

// Sample conversations
export const conversations: Conversation[] = [
  {
    id: "conv1",
    createdAt: new Date(),
    lastMessageAt: new Date(),
    name: "Prescription question",
    isGroup: false,
    messagesIds: ["msg1"],
    messages: [messages[0]],
    userIds: ["user1", "user2"],
    users: users
  }
];

// Link back the references that were undefined
users[0].conversations.push(conversations[0]);
users[1].conversations.push(conversations[0]);
