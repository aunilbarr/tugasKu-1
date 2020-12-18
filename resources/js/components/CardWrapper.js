import React from 'react';
import Card from "./Card"

function CardWrapper(props) {
    const cards = props.cards
    const listsCard = cards.map(card => {
        return (<Card
            key = {card.id}
            src = {card.src}
            details = {card.details}
            abbrev = {card.abbrev}
            subject = {card.subject}
            deadline = {card.deadline}
        />)
    })
    return (
      <div className="flex flex-col items-center">
        {listsCard}
      </div>
    );
}

export default CardWrapper;
