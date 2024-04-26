"use client";

import { useMemo, useState } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { HiEllipsisHorizontal } from "react-icons/hi2";

import { Conversation, User} from "../../../types/index"
import {users} from "../../../types/data";
import Link from "next/link";

import Avatar from "../../../components/Avatar";
import ChatDrawer from "./ChatDrawer";

interface HeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}

const Header: React.FC<HeaderProps> = ({ conversation }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);


  return (
    <>
      <ChatDrawer data={conversation} isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <div
        className="
        bg-white 
        w-full 
        flex 
        border-b-[1px] 
        sm:px-4 
        py-3 
        px-4 
        lg:px-6 
        justify-between 
        items-center 
        shadow-sm
        dark:bg-dusk
        dark:border-lightgray
      "
      >
        <div className="flex gap-3 items-center">
          <Link
            href="/conversations"
            className="
            lg:hidden 
            block 
            text-sky-500 
            hover:text-sky-600 
            transition 
            cursor-pointer
          "
          >
            <HiChevronLeft size={32} />
          </Link>
        <Avatar user={users[0]} />
          <div className="flex flex-col dark:text-gray-200">
            <div>{conversation.name || users[0].name}</div>
            {/* <div className="text-sm font-light text-neutral-500 dark:text-gray-400">
              {statusText}
            </div> */}
          </div>
        </div>
        <HiEllipsisHorizontal
          size={32}
          onClick={() => setDrawerOpen(true)}
          className="
          text-sky-500
          cursor-pointer
          hover:text-sky-600
          transition
        "
        />
      </div>
    </>
  );
};

export default Header;