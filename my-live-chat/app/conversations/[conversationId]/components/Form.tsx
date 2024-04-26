"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";
import { conversations, messages, users } from "@/app/types/data";
import { Message } from "@/app/types";

const Form = () => {
  const conversationId = "conv1";

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", "", { shouldValidate: true });
    const newMessage: Message = {
        id: `msg${messages.length + 1}`,
        body: data.message,
        createdAt: new Date(),
        seenIds: [],
        seen: [],
        conversationId: conversationId,
        senderId: "user1",
        sender: users[0]
    };
  
    messages.push(newMessage);
  
    const conversationIndex = conversations.findIndex(conv => conv.id === "conv1");
    if (conversationIndex !== -1) {
        conversations[conversationIndex].messagesIds.push(newMessage.id);
        conversations[conversationIndex].messages.push(newMessage);
    }
  
    users.forEach(user => {
        if (user.conversationIds.includes("conv1")) {
        user.messages.push(newMessage);
        }
    });
  
  };


  return (
    <div
      className="
        py-4 
        px-4 
        bg-white 
        border-t 
        flex 
        items-center 
        gap-2 
        lg:gap-4 
        w-full
        dark:bg-dusk
        dark:border-lightgray
      "
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-2 lg:gap-4 w-full">
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placeholder="Write a message"
        />
        <button
          type="submit"
          className="
            rounded-full 
            p-2 
            bg-sky-500 
            cursor-pointer 
            hover:bg-sky-600 
            transition
          "
        >
          <HiPaperAirplane size={18} className="text-white" />
        </button>
      </form>
    </div>
  );
};

export default Form;