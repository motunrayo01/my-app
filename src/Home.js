import React from 'react';
import {Link} from 'react-router-dom';


function Home(){
    return(
      <div>
      
      <div className="jumbotron bg-muted-black">
  <h1 className="display-4"> FINANCING SOLUTION </h1>
  <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Fugiat placeat minus quas iusto, provident, </p>
  
  <p>libero esse quaerat quod tempore, at expedita adipisci aut mollitia quae assumenda.</p>
  < Link to="/contact" className="badge badge-pill badge-primary">Get in Touch </Link>
  
      </div>
      </div>
    )

}


export default Home;