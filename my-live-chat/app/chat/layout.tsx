import Sidebar from "../components/sidebar/Sidebar";
import UserList from "./components/UserList";

interface User {
    id: string;
    name: string;
}

export default async function UsersLayout({ children }: { children: React.ReactNode }) {
  const users:User[] = [
    { id: "1", name: "Dr. Dylan" },
    { id: "2", name: "Livewell Admin"},
    { id: "3", name: "Jad Pharmacist" },
  ];

  return (
    <Sidebar>
      <div className="h-full">
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  );
}