import React from 'react';

const documentIcon = (
    <svg className="w-4 h-4 mr-4 stroke-current text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
    </svg>
)

const videoIcon = (
    <svg className="w-4 h-4 mr-4 stroke-current text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
)

const urlIcon = (
    <svg className="w-4 h-4 mr-4 stroke-current text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
    </svg>
)

function Details(props) {
    const details = props.data;
    const listDetails = details.map(detail => {
        const attachment = detail.attachment
        let attachmentBox

        if (attachment) {
            let attachmentIcon
            if (attachment.type === "document") {
                attachmentIcon = documentIcon
            } else if (attachment.type === "video") {
                attachmentIcon = videoIcon
            } else {
                attachmentIcon = urlIcon
            }

            attachmentBox = (
                <div className="flex bg-gray-100 p-2 rounded-md mt-2 items-center">
                    {attachmentIcon}
                    <span className="text-sm font-medium">{detail.attachment.name}</span>
                </div>
            )
        }

        return (
            <div
                key={detail.id.toString()}
                className="p-4 border-t"
            >
                <span>{detail.text}</span>
                {attachmentBox}
            </div>
        )
    })

    return (
        <div className="mt-4">
            {listDetails}
        </div>
    )
}

function Card(props){
    return (
        <div className="bg-white border w-full rounded-lg mb-6 shadow-lg">
            <div className="px-4 py-2 rounded-t-lg mb-4 bg-green-500">
                <span className="text-white font-semibold">{props.deadline}</span>
            </div>
            <div className="flex items-center justify-between">
                <div className="px-4 flex items-end">
                    <h2 className="text-4xl font-extrabold mr-2 leading-none">{props.abbrev}</h2>
                    <span className="text-sm text-gray-400">({props.subject})</span>
                </div>
                <a href={props.src} className="pr-4">
                    <svg className="w-6 h-6 stroke-current text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                </a>
            </div>
            <Details data={props.details} />
        </div>
    )
}

export default Card;
