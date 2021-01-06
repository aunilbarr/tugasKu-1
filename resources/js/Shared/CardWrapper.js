import React from 'react'
import PropTypes from 'prop-types'
import Card from "./Card"
import { InertiaLink } from '@inertiajs/inertia-react'

function CardWrapper({adminMode, cards, emptyComponent}) {
    let listsCard

    function editHandler(id) {
        console.log("editClicked :" + id)
    }

    function deleteHandler(id) {
        console.log("deleteHandler :" + id)
    }

    if (cards.length > 0) {
        listsCard = cards.map(card => {
            return (
            <div className="flex items-center w-full" key={card.id}>
                <Card
                    abbrev = {card.abbrev}
                    attachment = {card.attachment}
                    deadline = {card.deadline}
                    detail_text = {card.detail_text}
                    group = {card.group}
                    src = {card.src}
                    subject = {card.subject}
                />
                { !adminMode ||
                <div className="flex flex-col ml-4">
                    <svg onClick={() => deleteHandler(card.id)} className="w-8 h-8 mb-4 stroke-current text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>

                    <InertiaLink href={`/admin/edit/${card.id}`} className="flex flex-row sm:flex-col items-center">
                        <svg className="w-8 h-8 stroke-current text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                        </svg>
                    </InertiaLink>
                </div>
                }
            </div>
            )
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
    adminMode: PropTypes.bool,
    cards: PropTypes.arrayOf(PropTypes.object),
    emptyComponent: PropTypes.element,
}

CardWrapper.defaultProps = {
    adminMode: false,
    cards: [],
    emptyComponent: <h1>Data yang anda cari tidak ditemukan</h1>
}

export default CardWrapper;
