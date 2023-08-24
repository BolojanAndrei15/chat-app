"use client";
import { MessagesSquare } from "lucide-react";

import AddFriend from "./AddFriend";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

function Sidebar() {
  const router = useRouter();
  return (
    <div className="flex flex-col h-[100vh] bg-slate-200 w-56 items-center">
      <div className="flex space-x-2 mt-2">
        <MessagesSquare className="w-8 h-8" />
        <h1 className="font-bold text-2xl">Chat App</h1>
      </div>
      <div className="flex flex-col space-y-4 mt-20">
        <AddFriend />
        <Button onClick={() => router.push("/dashboard/friend-requests")}>
          <h1 className="text-sm">Friend requests</h1>
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
