import { use, useMemo } from "react";
import { usePathname, useParams } from "next/navigation";
import { HiChat} from 'react-icons/hi';
import {HiArrowLeftOnRectangle, HiUsers} from 'react-icons/hi2';
import useConversation from "./useConversation"
const useRoutes = () => {
    const pathname = usePathname();
    const { conversationId } = useConversation();

    const routes = useMemo(() => [
        {
            icon: HiChat,
            label: 'Chat',
            active: pathname === '/conversations' || !!conversationId,
            href: '/conversations',
        },
        {
            label: 'Users',
            href: '/users',
            icon: HiUsers,
            active: pathname === '/users'
        },
        {
            label: 'Return',
            href: '#',
            icon: HiArrowLeftOnRectangle,
        }

    ],[pathname, conversationId] );

    return routes;
}

export default useRoutes;