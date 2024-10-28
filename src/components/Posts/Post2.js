import React from 'react'
import Banner from '../Banner'

export default function Post2(props) {
  return (
<div class="row">
      <div class="col-4"> <Banner/></div>
      <div class="col-8"> 
        <div className='mt-5 mb-5  container-fluid aboutme'> 
          <h3 className='mt-5 mb-2'>PROJECTS</h3>

          <div className="row text-center">    
            <div className=" col mt-4 mb-3  bd-highlight">
              <div className="card">
              <img src="..." className="card-img-top" alt="..."></img>
              <div className="card-body">
              <h5 className="card-title">Predictify - Human Critical Organ Disease Prediction Using Deep Learning</h5>
              <p className="card-text">Skillset : Python, Deep Learning, Flask, Bootstrap, MongoDB</p>
              <a href="#" class="btn btn-primary">Repo Link</a></div>
              </div>
          </div>
  <div className="col mt-4 mb-3 mx-1 bd-highlight">
  <div className="card">
              <img src="..." className="card-img-top" alt="..."></img>
              <div className="card-body">
              <h5 className="card-title">GameNtech-Blogs</h5>
              <p className="card-text">Skillset : </p>
              <a href="#" class="btn btn-primary">Website Link : </a></div>
              </div>
  </div>
  <div className="col mt-4 mb-3 m-1 bd-highlight">
  <div className="card">
              <img src="..." className="card-img-top" alt="..."></img>
              <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a></div>
              </div>
  </div>
  </div>
  <div className="row text-center pb-3">  
  <div className="col mt-4 mb-3 bd-highlight">ard4</div>
  <div className="col mt-4 mb-3 mx-1 bd-highlight">card5</div>
  <div className="col mt-4 mb-3 mx-1 bd-highlight">card5</div>
    </div>

          
          <div className=' mt-4 eduhead'> bachelor’s of Engineering (Information Technology)</div>
          <div>D.Y. Patil College of Engineering, Akurdi, Pune ( 2020 - 2024 )</div>
          <div> CGPA : 8.65 </div>
          <br></br>
          <div className='eduhead'>Higher Secondary School (12th)</div>
          <div>Residential Junior College ( 2018 - 2020 )</div>
          <div> Percentage : 84% </div>
          <br></br>
          <div className='eduhead'>Secondary School (10th)</div>
          <div>Residential Junior College ( 2013 - 2018 )</div>
          <div> Percentage : 96% </div>
          
          <h3 className='mt-4 mb-2'>EXPERIENCE</h3>
          
          <div className=' mt-4 eduhead'> Web Development Intern</div>
          <div>Let's Grow More ( MAR 2023 - APR 2023 )</div>
          <div> Key Skills: HTML, CSS, JavaScript, React.Js, Bootstrap </div>
          <br></br>
          <div className='eduhead'>Front-End web Developer Intern</div>
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
   
  )
}
