import React from 'react'
import CardContainer from './CardContainer'
import { cardData } from './CardData'

const Card = () => {
   
  const card = cardData.map( data => {
    return (
      <CardContainer 
        key={data.id}
        data={data}
        // img={data.image} 
        // star={data.star} 
        // descriptionOne={data.starDescription} 
        // title={data.title} 
        // price={data.price}
        // openSpots={data.openSpots}
        // location={data.location}
      /> 
    )
  })

  return (
    <div className="card">
      { card }
    </div>
  )
}

export default Card