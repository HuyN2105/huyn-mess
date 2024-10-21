import React from "react";
import {Sen} from "next/dist/compiled/@next/font/dist/google";

interface MessageProps {
	id: string;
	MessageContent: string;
	SenderId: string;
	isFirst?: boolean | false;
	isLast?: boolean | false;
	isSingle?: boolean | false;
}

function Message({ id, SenderId, MessageContent, isFirst, isLast, isSingle }: MessageProps) {

	return (
		<React.Fragment key={id}>
			<style jsx>{`
				#Message{
					background-color: ${SenderId !== '0' ? '#303030' : '#067bff'};
					margin-left: ${SenderId !== '0' ? '.5rem' : 'auto'};
					margin-right: ${SenderId !== '0' ? 'auto' : '.5rem'};
					${isSingle? 'border-radius: 1rem' : SenderId !== '0' ? `border-radius: ${isFirst? '1rem' : '.25rem'} 1rem 1rem ${isLast? '1rem' : '.25rem'};` : `border-radius: 1rem ${isFirst? '1rem' : '.25rem'} ${isLast? '1rem' : '.25rem'} 1rem;`}
					margin-top: ${isFirst || isSingle ? '.5rem' : '0.125rem'};
				}
			`}</style>
			<div
				id='Message'
				key={`Message-${id}`}
				className='w-fit max-w-[45%] pl-2 pr-2 pt-1 h-fit font-Helvetica'
			>
				{MessageContent}
			</div>
		</React.Fragment>
	);
}

export default Message;
