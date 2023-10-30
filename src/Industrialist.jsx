import React from 'react'
import './image/Ginni.jpg';
import './image/about-us-banner1.jpg';

export const Industrialist = () => {
  return (
    <div className='MarginTop'>
      <div className='overflow'>
        
   <div> 
    <img src = { require("./image/about-us-banner1.jpg") } alt="du" className='Banner' />
   </div>
    <div className='flex4'>
      <div className='background'>
      <div className='box'>
        <h1 className='IndustryName'>GINNI FILAMENTS LTD.</h1>
        {/* <img src={ require("./image/Ginni.jpg") } alt="Ginni Filaments Pvt Ltd" height={300} width={1100} className='Covered'/> */}
        {/* <h2>About Us</h2> */}
        <div className='TxtWrap'>
        <p>A 100% export oriented unit, it was designed to produce a quality that was genuinely world class. Sophisticated plant & machinery from the world renowned machinery manufacturers viz. Rieter, Schlafhorst, Volkmann etc. with top of the line support systems for quality monitoring were installed.Also a  leader into private labeling and contract Manufacturing of wipes , 
        all types of creams, lotions and liquids for personal care, home care and baby care.</p>
        </div>
    <div className='Others'> 
      <p>Website Link <a href="http://ginnifilaments.com/">http://ginnifilaments.com/</a></p></div>
      <h2>Address:</h2>
      <p>D-196,Sector-63,<br /> Noida,Uttar Pradesh</p>
        </div>

      </div>
    </div>
    </div>
    </div>           
  )
}
export default Industrialist;
