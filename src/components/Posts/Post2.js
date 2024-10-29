import React from 'react'
import Banner from '../Banner'
import './Post.css'

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
              <img src="red.jpg" className="card-img-top" alt="..."></img>

              <h5 className="mt-3 card-title">Predictify</h5>
              <p className="card-text">Skillset : Python, Deep Learning, Flask, Bootstrap, MongoDB</p>
              <a href="https://github.com/Laxmikantathare/Predictify" class="btn btn-primary">Repo Link ↗️</a></div>

          </div>
  <div className="col mt-4 mb-3 mx-1 bd-highlight">
  <div className="card">
              <img src='red.jpg' className="card-img-top" alt="..."></img>

              <h5 className="mt-3 card-title">GameNtech-Blogs</h5>
              <p className="card-text">Skillset : React.Js, CSS, Bootstrap, Firebase</p>
              <a href="https://gamentech-blogs.netlify.app/" class="btn btn-primary">Website Link ↗️</a></div>

  </div>
  <div className="col mt-4 mb-3 m-1 bd-highlight">
  <div className="card">
              <img src="red.jpg" className="card-img-top" alt="..."></img>
      
              <h5 className="mt-3 card-title">Loan Calculator</h5>
              <p className="card-text">Skillset : Python, Plotly,  Streamlit</p>
              <a href="https://github.com/Laxmikantathare/Streamlit_Loan_Calculator/blob/main/calculator.py" class="btn btn-primary">Repo Link ↗️</a>
              </div>
  </div>
  </div>
  <div className="row text-center pb-3">  
  <div className="col mt-4 mb-3 bd-highlight">
  <div className="card">
              <img src="red.jpg" className="card-img-top" alt="..."></img>
      
              <h5 className="mt-3 card-title">Getweathy</h5>
              <p className="card-text">Skillset : React.Js, Bootstrap, WeatherMap API</p>
              <a href="https://getweathy.netlify.app/" class="btn btn-primary">Website Link ↗️</a>
              </div>
  </div>
  <div className="col mt-4 mb-3 mx-1 bd-highlight">
  <div className="card">
              <img src="red.jpg" className="card-img-top" alt="..."></img>
      
              <h5 className="mt-3 card-title">Spam Mail Detection</h5>
              <p className="card-text">Skillset : Python, Flask, Bootstrap, OnRender</p>
              <a href="https://spam-mail-detection-6kfy.onrender.com/" class="btn btn-primary">Website Link ↗️</a>
              </div>
  </div>
  <div className="col mt-4 mb-3 mx-1 bd-highlight">
  <div className="card">
              <img src="red.jpg" className="card-img-top" alt="..."></img>
      
              <h5 className="mt-3 card-title">Face and Eye Detection</h5>
              <p className="card-text">Skillset : Python, Flask, Bootstrap, OpenCV</p>
              <a href="https://github.com/Laxmikantathare/Face_Eye_Detection" class="btn btn-primary">Repo Link ↗️</a>
              </div>
  </div>
  
    </div>

      <h3 className='mt-3 mb-2'>CERTIFICATIONS</h3>
          
          <h5 className=' mt-3 eduhead'>1. Python for data Science, AI & Development by IBM</h5>
          <h5>2. Career Essentials in Generative AI by Microsoft and LinkedIn by Microsoft</h5>
          <h5>3. Intro to Deep Learning by Kaggle</h5>
          <h5>4. Elements of AI by University of Helsinki</h5>
          <h5>5. Career Essentials in GitHub Professional Certificate by GitHub</h5>
          
        </div>
      </div>

</div>
   
  )
}
