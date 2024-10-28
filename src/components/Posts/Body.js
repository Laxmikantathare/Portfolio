import React from 'react'
import Post1 from "./Post1";
// import Post2 from "./Post2";
// import Post3 from "./Post3";
// import Post4 from "./Post4";
// import Post5 from "./Post5";
import './Post.css'
import Banner from '../Banner';

// import {Link} from "react-router-dom";
// import Post6 from './Post6';



export default function Body(props) {

return (
    <> 
    <div class="row">
      <div class="col-4"> <Banner/></div>
      <div class="col-8"> 
        <div className='mt-5 mb-5  container-fluid aboutme'> 
          <h3 className='mt-5 mb-2'>ABOUT ME</h3>
          
          <p className='mt-5'>I’m Laxmikant Maruti Athare, a data science enthusiast with a strong academic foundation and hands-on experience in machine learning and artificial intelligence. With a bachelor’s degree in Information Technology from engineering from D.Y. Patil College of Engineering, Akurdi, Pune with a CGPA of 8.65. I’m passionate about harnessing data to drive impactful insights and solutions.  I really enjoy learning new languages and frameworks. My projects range from building dynamic web applications to developing machine learning models and I’m currently working on programming languages and Python Libraries.</p>
          
          <h5 className='mt-5'>Profile           : Software Developer | ML/DL/AI Engineer | Flask Developer </h5>
          <h5 className='mt-4'>Education         : bachelor’s of engineering (Information Technology) </h5>
          <h5 className='mt-4 mb-4'>Areas of Interest : Gaming, Drawing, Martial Arts </h5>

        </div>
      </div>

</div>
   

</>
  )
}
