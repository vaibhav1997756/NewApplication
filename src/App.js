// import logo from './logo.svg';
import React, { lazy, Suspense , useState, useEffect} from 'react';
import './App.css';
import './Navbar.css';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
//import HomePage from './Home';
//import Award from './Awards'
//import Social from './SocialWork'
//import Industry from'./Industrialist'
//import Education from './Educationist'
//import Position from './PositionHeld'
//import Boxes from './Photo'
//import About from './AboutUs'
import Navbar from './Nav'
import Footer from './Footer'
//import Send from './SendEmail'
//import ExamRules from './Exam'
//import Family from './FamilyTree'
//import Speech from './SomeSpeeches'
//import Article from './Articles'

const HomePage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./Home')), 500); // 1-second delay
  });
});

const Award = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./Awards')), 500); // 1-second delay
  });
});

const Social = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./SocialWork')), 500); // 1-second delay
  });
});

const Industry = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./Industrialist')), 500); // 1-second delay
  });
});
const Education = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./Educationist')), 500); // 1-second delay
  });
});

const Position = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./PositionHeld')), 500); // 1-second delay
  });
});

const About = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./AboutUs')), 500); // 1-second delay
  });
});



const ExamRules = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import('./Exam')), 500); // 1-second delay
  });
});


function App() {
  console.log("hii")
  return (
    <div>
       <Router>
         <Navbar /> 
         <Suspense fallback={<CustomLoadingComponent />}>
       <Routes>
        <Route path="/" element={<HomePage/> } />
        <Route path="/award" element={ <Award /> } />
        <Route path="/socialwork" element={ <Social /> } />
         <Route path="/industrialist" element={ <Industry /> } /> 
        <Route path="/educationist" element={ <Education /> } />
        <Route path="/positionheld" element={ <Position /> } />
         
        <Route path='/aboutus' element={<About />} /> 
        <Route path='/examrules' element={<ExamRules />} /> 
         {/*  <Route path="/my" element={ <Article /> } />
           <Route path="/jai" element={<Boxes />} /> 
        <Route path='/jaipuria' element={<Family />} />
        <Route path='/speech' element={<Speech />} />   */}
       
        
       </Routes>
       <Footer /> 
       </Suspense>
       {/* <Footer />  */}
    </Router>
    </div>
  );
}
function CustomLoadingComponent() {
  return <div style={{color:"black"}}>Loading... (with 1-second delay)</div>;
}
export default App;
