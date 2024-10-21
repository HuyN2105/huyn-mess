import Message from "@/app/Components/Message/Message";
import React, {useEffect} from "react";

interface MessageType {
    id: string;
    SenderId: string;
    MessageContent: string;
}

interface Props {
    MessagesList: MessageType[];
    UpdateMessagesList: Function;
}

function ConversationContent( {MessagesList, UpdateMessagesList}: Props ) {

    useEffect(() => {
        if(window !== undefined){
            const container = document.getElementById('ConversationContent');
            // @ts-ignore
            container.scrollTop = container.scrollHeight;
        }
    })


    return (<div id="ConversationContent" className="overflow-scroll overflow-x-hidden max-h-[87vh]">
        {MessagesList.map(({id, SenderId, MessageContent}, index) => {

            let [isFirst, isLast, isSingle] : boolean[] = [false, false, false];

            if ((index === 0 || MessagesList[index - 1]["SenderId"] !== SenderId) && MessagesList[index + 1]["SenderId"] !== SenderId) isSingle = true;

            else if ((index > 0 && MessagesList[index - 1]["SenderId"] !== SenderId) || index === 0) isFirst = true;

            else if (index === MessagesList.length - 1 || MessagesList[index + 1]["SenderId"] !== SenderId) isLast = true;

            if(index === 0){

            }

            return (
                <Message
                    key={id}
                    id={`Message-${id}`}
                    SenderId={SenderId}
                    MessageContent={MessageContent}
                    isFirst={isFirst}
                    isLast={isLast}
                    isSingle={isSingle}
                />
            )
        })}
    </div>)
}

export default ConversationContent;