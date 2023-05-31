import React from 'react'

const Card = () =>{
    const cardData = [
        {
            id:1,
            title:'UI/UX Development',
        },
        {
            id:2,
            title:'React JS Development',
        }
    ];
     return (
    <div className='cards'>
        {cardData.map((card) => (
            <div className='card-item' key={card.id}>
                <h3>{card.title}</h3>
            </div>
        ))}
      
    </div>
  )
};

export default Card;
