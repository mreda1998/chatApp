import { conversations, messages } from "../../types/data";
import EmptyState from "../../components/EmptyState";
import Body from "./components/Body";
import Form from "./components/Form";
import Header from "./components/Header";

interface IParams {
  conversationId: string;
}

const ConversationId = async ({ params }: { params: IParams }) => {
  const conversation = conversations[0];
  const messagesData = messages;

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  return (
    <div className="lg:pl-80 h-full">
      <div className="h-full flex flex-col">
        <Header conversation={conversation} />
        <Body initialMessages={messagesData} />
        <Form />
      </div>
    </div>
  );
};

export default ConversationId;