
import React ,{useState} from "react";
import Navbar from "./components/Navbar";


import Contact from "./components/Contact"


import Body from "./components/Posts/Body";
import {Routes,BrowserRouter as Router,Route} from "react-router-dom";
// import Postpg1 from "./postpage/Postpg1";
// import Postpg2 from "./postpage/Postpg2";
// import Postpg3 from "./postpage/Postpg3";
// import Postpg4 from "./postpage/Postpg4";
// import Postpg5 from "./postpage/Postpg5";
// import Allpost from "./components/Allpost";
import Post1 from "./components/Posts/Post1";
import Post2 from "./components/Posts/Post2";
// import Postpg6 from "./postpage/Postpg6";

function App() {
    
  return (
<>    
  <Router>
        <Navbar  />
    <Routes>
      
       <Route exact path="/" element={<Body  /> }></Route>

       <Route exact path="/post1" element={ <Post1 />}></Route>
       <Route exact path="/post2" element={ <Post2/>}></Route>
       <Route exact path="/post3" element={ <Post2/>}></Route>
       <Route exact path="/post4" element={ <Post2/>}></Route>
       <Route exact path="/post5" element={ <Post2/>}></Route>
 
       <Route exact path="/contact" element={ <Contact />}></Route>
      

     </Routes>

  </Router>
    </>
  )
}
export default App;
