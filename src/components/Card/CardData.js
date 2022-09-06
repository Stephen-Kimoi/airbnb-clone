// import mountainBike from '../images/mountain-bike.png' 
import runner from '../images/runner.png' 
import weddingPhoto from '../images/wedding-photography.png' 
import star from '../images/star.png' 
import soldOut from '../images/sold-out.png' 
import online from '../images/online.png' 

export const cardData = [
    {
        id: 1, 
        image: runner, 
        tag: soldOut,
        star, 
        starDescription: '(6).USA', 
        title: 'Life lessons with Katie Zaferes', 
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.", 
        price: 'From $136 / person', 
        stats: {
            rating: 5.0, 
            reviewCount: 6
        }, 
        location: 'Online', 
        openSpots: 0    
    }, 
    {
        id: 2, 
        image: weddingPhoto, 
        tag: online,
        star, 
        starDescription: '(30).USA', 
        title: 'Learn wedding photography', 
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.", 
        price: 'From $125 / person', 
        stats: {
            rating: 5.0, 
            reviewCount: 30 
        },
        location: "Online", 
        openSpots: 27
    }, 
    {
        image: runner, 
        star, 
        starDescription: '(2).USA', 
        title: 'Group mountain biking',  
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)", 
        price: 'From $50 / person', 
        stats: {
            rating: 4.8, 
            reviewCount: 2 
        }, 
        location: "Norway", 
        openSpots: 0
    }, 
    {
        image: weddingPhoto, 
        star, 
        starDescription: '(2).USA', 
        title: 'Group mountain biking',  
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)", 
        price: 'From $50 / person', 
        stats: {
            rating: 4.8, 
            reviewCount: 2 
        }, 
        location: "Norway", 
        openSpots: 0
    }
]
