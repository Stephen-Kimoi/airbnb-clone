import React from 'react'

const CardContainer = ({data}) => {
  console.log(data)
  console.log(data.image)
  let badgeText  
  if (data.openSpots === 0){
    badgeText = "SOLD OUT"
  } else if (data.location === "Online"){
    badgeText = "ONLINE"
  }

  return (
        <div className='card-section'>
            { 
              badgeText !== null && 
              <div className='card-badge'>
                { 
                  badgeText === "SOLD OUT" ? 
                  <p>SOLD OUT</p>
                  :  
                  <p>ONLINE</p>
                }                     
              </div>
            }
            <div className='card-image'>
            <img src={data.image} alt='runner'/> 
            </div> 

            <div className='card-description'>

                <img src={data.star} alt='star'/>
                <p className='description-one'>{data.descirptionOne}</p>

                <p>{data.title}</p> 
                <p>{data.price}</p>
            </div>
        </div>
  )
}

export default CardContainer