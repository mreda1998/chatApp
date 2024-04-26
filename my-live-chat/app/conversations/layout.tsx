import React from 'react';
import { conversations, users } from '../types/data'; // Adjust the import path as needed
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";

export default function ConversationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations} users={users} />
        {children}
      </div>
    </Sidebar>
  );
}
