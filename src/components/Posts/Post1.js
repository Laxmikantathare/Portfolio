import React from 'react'
import './Post.css'
import Banner from '../Banner'
export default function Post1(props) {
  return (
    <> 
    <div class="row">
      <div class="col-4"> <Banner/></div>
      <div class="col-8"> 
        <div className='mt-5 mb-5  container-fluid aboutme'> 
          <h3 className='mt-5 mb-2'>EDUCATION</h3>
          
          <div className=' mt-4 eduhead'><strong> bachelor’s of Engineering (Information Technology)</strong></div>
          <div>D.Y. Patil College of Engineering, Akurdi, Pune ( 2020 - 2024 )</div>
          <div> CGPA : 8.65 </div>
          <br></br>
          <div className='eduhead'><strong>Higher Secondary School (12th) </strong></div>
          <div>Residential Junior College ( 2018 - 2020 )</div>
          <div> Percentage : 84% </div>
          <br></br>
          <div className='eduhead'><strong>Secondary School (10th)</strong></div>
          <div>Residential Junior College ( 2013 - 2018 )</div>
          <div> Percentage : 96% </div>
          
          <h3 className='mt-4 mb-2'>EXPERIENCE</h3>
          
          <div className=' mt-4 eduhead'><strong> Web Development Intern</strong></div>
          <div>Let's Grow More ( MAR 2023 - APR 2023 )</div>
          <div> Key Skills: HTML, CSS, JavaScript, React.Js, Bootstrap </div>
          <br></br>
          <div className='eduhead'><strong>Front-End web Developer Intern</strong></div>
          <div>Oasis infobyte ( AUG 2022 - OCT 2022 )</div>
          <div> Key Skills: HTML, CSS, JavaScript </div>

          <h3 className='mt-4 mb-2'>SKILLS</h3>
          
          <div className=' mt-4 eduhead'>           
          <h5 className='mt-3'>Programming Languages          : C++, Python, JavaScript </h5>
          <h5 className='mt-4'>Libraries/Frameworks : HTML, CSS, Bootstrap, React.Js, Flask, Streamlit</h5>
          <h5 className='mt-4'>Database : MySQL, MongoDB</h5>
          <h5 className='mt-4 mb-4'>Developer Tools : VS Code, GitHub, Jupyter Notebook</h5>
          </div>
  
          
          
          
        </div>
      </div>

</div>
   

</>
  )
}
