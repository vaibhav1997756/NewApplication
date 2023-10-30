import React from 'react'
 
import './image/image-award.jpg';
import './image/Awards-banner.jpg'
const Awards = () => {
  // console.log("hhhhhhhh")  
    return ( 
        <div className='hidden'>
   
        <div className='award-banner'>

          <p className='aw-txt'>Awards</p>
        </div>
         <div className='container23'>
                 <div className='inline-Award'>
                  <div className='left-Award'>
                     <img src={ require("./image/image-award.jpg") } alt="AwardPhoto1"  className='WidthN'/>   
                     </div>
                     <div className='right-Award'>
                     <p className='NameOfAchievements'> Lifetime Achievement Award at Education World School Ranking Awards, 2022</p>    
                     </div> 
                 </div>   
         </div>
         </div>
    )
}
export default Awards;