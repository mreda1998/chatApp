"use client";

import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import { MdOutlineGroupAdd } from "react-icons/md";

import { useRouter } from "next/navigation";

import useConversation from "../../hooks/useConversation";
import { FullConversationType, User } from "../../types";
import ConversationBox from "../components/ConversationBox"

interface ConversationListProps {
  initialItems: FullConversationType[];
  users: User[];
}

const ConversationList: React.FC<ConversationListProps> = ({ initialItems, users }) => {
  const [items, setItems] = useState(initialItems);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const { conversationId, isOpen } = useConversation();

  return (
    <>
      <aside
        className={clsx(
          `
          fixed 
          inset-y-0 
          pb-20
          lg:pb-0
          lg:left-20 
          lg:w-80 
          lg:block
          overflow-y-auto 
          border-r 
          border-gray-200 
          dark:border-lightgray
        `,
          isOpen ? "hidden" : "block w-full left-0"
        )}
      >
        <div className="px-5">
          <div className="flex justify-between mb-4 pt-4">
            <div className="text-2xl font-bold text-neutral-800 dark:text-gray-200">Messages</div>
            <div
              onClick={() => setIsModalOpen(true)}
              className="
                rounded-full 
                p-2 
                bg-gray-100 
                text-gray-600 
                cursor-pointer 
                hover:opacity-75 
                transition
                dark:bg-lightgray
                dark:text-gray-200
              "
            >
              <MdOutlineGroupAdd size={20} />
            </div>
          </div>
          {items.map((item) => (
            <ConversationBox key={item.id} data={item} selected={conversationId === item.id} />
          ))}
        </div>
      </aside>
    </>
  );
};

export default ConversationList;