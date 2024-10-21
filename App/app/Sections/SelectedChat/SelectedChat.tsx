'use client';

import TextField from "@/app/Components/TextField/TextField"
import Conversation from "@/app/Components/Conversation/Conversation";

function SelectedChat() {
    return <div id="SelectedChat" className="w-[50vw] h-screen fixed left-[25%] bg-[#242526] border-[#393a3b] border">
        <Conversation ConversationId="0" />
        <TextField />
    </div>
}

export default SelectedChat;