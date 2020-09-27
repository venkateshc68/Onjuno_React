import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import {Button} from 'react-bootstrap'
import {MdEmail} from 'react-icons/md'

import { InfoSection, Pricing } from '../../components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      
      <div className="container"    >
     
      <input type="text" placeholder= "   Enter Email Address" style={{height:"70px",width:"500px",padding:"3px 5px 3px 5px",marginLeft:"25px",marginTop:"-200px",marginBottom:"350px",borderRadius:"25px 25px 25px 25px",top:"30px"}}>
    
      </input>
      <Button className="abc" style ={{marginLeft:"-90px",backgroundColor:"#0000FF",fontSize:"16px",padding:"8px 8px"}}>Join Now</Button>
      
      </div>
     
      
      <InfoSection {...homeObjTwo} />
      <Pricing />
    
    </>
  );
}

export default Home;
