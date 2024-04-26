"use client";

import Image from "next/image";
import {User} from "../types/index";

interface AvatarProps {
  user?: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {

  return (
    <div className="relative h-9 md:h-11">
      <div
        className="
        relative 
        inline-block 
        rounded-full 
        overflow-hidden
        h-9 
        w-9 
        md:h-11 
        md:w-11
      "
      >
        <Image
          className="object-cover"
          fill
          src={user?.image || "/images/avatar-placeholder.png"}
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Avatar;