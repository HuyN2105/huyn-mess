import React from "react";

interface Props {
    Name: string;
}

function ConversationName({Name}: Props) {
    return(
        <div id="ConversationName" className="h-[7vh] text-xl pt-[2vh] pl-4 pr-4 border-b-[#212223] border-b-2 whitespace-nowrap">
            {Name}
        </div>
    );
}

export default ConversationName;