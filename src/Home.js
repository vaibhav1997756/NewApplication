import React from 'react';
function Home(){

   
    return (
        <div className='hello'>
            <div className='banner-about'>
            <h3 className='txt-about'>ABOUT US</h3>
            </div>
      
    <div className = 'middle'>
        <div className='left-img'> 
        <img src ={ require("./image/Mr-Shishir-Jaipuria.jpg") }
        alt = "Mr. Shishir Jaipuria"
        height = { 300 }
        width = { 400 }
        />
        </div>  
        <div className='right-content'>
        <h1 id='info'> About us </h1> 
        <div id='Content-Border'>
        <p id='des'>
        Mr.Shishir Jaipuria is the scion of famous Jaipuria family from Kanpur known
        for their contribution towards Education, Media, Textile and Sugar industries.Jaipuria Family’ s interest in education dates back to the Pre Independence Era when Seth Anandram Jaipuria College was set up(1945) in Kolkata.Mr Shishir Jaipuria is carrying forward the legacy of his family and is currently serving as CMD at Ginni Filaments Ltd, an integrated traditional textile company which holds a large share of the technical textile market.
        Currently, Mr.Jaipuria is the Co - chair at FICCI Arise.In the past,he has served as the Managing Director of The Pioneer Limited, a leading Newspaper in Uttar Pradesh.He has been on the Board of National Skill Development Corporation(NSDC), Chairman of Confederation of Indian Textile Industry(CITI), and Northern India Textile Research Association(NITRA), Northern India Textile Mills Association(NITMA), and PHD Chamber of Commerce & Industry(PHDCCI) among others.</p>  
       </div>
        </div> 
        </div> 
              
        </div>

        
    );

   
}
export default Home;