'use strict';

import React from 'react';
import { useState } from 'react';
import Message from '@/app/Components/Message/Message';
import ConversationName from "@/app/Components/Conversation/ConversationName/ConversationName";
import ConversationContent from "@/app/Components/Conversation/ConversationContent/ConversationContent";

// @ts-ignore
import { Conversations } from './temp/tempdata.json';

interface MessageType {
	id: string;
	SenderId: string;
	MessageContent: string;
}

interface Props {
	ConversationId: string;
}

function Conversation({ ConversationId }: Props) {
	// @ts-ignore
	const CurrentConversation = Conversations[`Conversation-${ConversationId}`];
	const Name: string = CurrentConversation[`ConversationName`];
	const [MessagesList, setMessageList] = useState<MessageType[]>(
		CurrentConversation['Messages']
	);

	function UpdateMessageList(mess: MessageType) {
		setMessageList([...MessagesList, mess]);
	}

	return (
		<div
			id='ConversationContainer'
			className='h-[94.25vh] relative bg-[#242526] overflow-hidden mb-2'
		>

			<ConversationName Name={Name} />

			<ConversationContent MessagesList={MessagesList} UpdateMessagesList={UpdateMessageList} />

		</div>
	);
}

export default Conversation;
