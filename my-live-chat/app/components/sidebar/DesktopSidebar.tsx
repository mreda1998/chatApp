'use client';

import useRoutes from '@/app/hooks/useRoutes';
import { useState
 } from 'react';
import DesktopItem from './DesktopItem';
const DesktopSidebar = () => {

    const routes = useRoutes();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="hidden lg:fixed lg:insert-y-0 lg:lef-0 lg:x-40 lg:w-20 xl:px-6 lg:overflow-y-auto lg:bg-white lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between">
            <div className="mt-4 flex flex-col justify-between">
                <ul role='list' className='flex flex-col items-center space-y-1'>
                    {routes.map((item) => (
                        <DesktopItem
                        key={item.label}
                        href={item.href}
                        label={item.label}
                        icon={item.icon}
                        active={item.active}>
                        </DesktopItem>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default DesktopSidebar;