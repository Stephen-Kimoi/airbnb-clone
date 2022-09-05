import React from 'react'
import CardContainer from './CardContainer'
import { data1, data2, data3 } from './CardData'

const Card = () => {
  return (
    <div className="card">

       <CardContainer 
            img={data1.image} 
            star={data1.star} 
            descriptionOne={data1.starDescription} 
            description={data1.description} 
            price={data1.price}
        /> 

       <CardContainer 
            img={data2.image} 
            star={data2.star} 
            descirptionOne={data2.starDescription} 
            description={data2.description} 
            price={data2.price} 
        />  

        <CardContainer 
            img={data3.image} 
            star={data3.star} 
            descirptionOne={data3.starDescription} 
            description={data3.description} 
            price={data3.price} 
        />  
       
    </div>
  )
}

export default Card