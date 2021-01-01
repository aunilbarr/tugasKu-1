import React from 'react'
import PropTypes from 'prop-types'
import Card from "./Card"

function CardWrapper({cards, emptyComponent}) {
    let listsCard
    if (cards.length > 0) {
        listsCard = cards.map(card => {
            return (<Card
                key = {card.id}
                src = {card.src}
                details = {card.details}
                abbrev = {card.abbrev}
                subject = {card.subject}
                deadline = {card.deadline}
                group = {card.group}
            />)
        })
    } else if (cards.length === 0) {
        listsCard = emptyComponent
    }

    // state buat yang point2 buat meyakinkan di app aja

    return (
      <div className="flex flex-col items-center">
        {listsCard}
      </div>
    );
}

CardWrapper.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object),
    emptyComponent: PropTypes.element
}

CardWrapper.defaultProps = {
    cards: [],
    emptyComponent: <h1>Data yang anda cari tidak ditemukan</h1>
}

export default CardWrapper;
