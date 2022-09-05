import React from 'react'

const CardContainer = ({img, description, star, descirptionOne, price}) => {
  return (
        <div className='card-section'>
            <div className='card-image'>
            <img src={img} alt='runner'/> 
            {/* <img src={data1.tag} alt='tag'/> */}
            </div> 

            <div className='card-description'>

                <img src={star} alt='star'/>
                <p className='description-one'>{descirptionOne}</p>

                <p>{description}</p> 
                <p>{price}</p>
            </div>
        </div>
  )
}

export default CardContainer