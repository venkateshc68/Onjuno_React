import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {FcCheckmark} from 'react-icons/fc'
import {MdDone} from 'react-icons/md'
import { Progress } from 'react-sweet-progress';
import {RiMoneyDollarCircleFill} from 'react-icons/ri'
import "react-sweet-progress/lib/style.css";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: 'light', size: 60 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Sign up Early To Save More</PricingHeading>
          <h5 style={{fontSize:"21px",color:"#808080"}}>Depending on the level of your checking account, you’ll earn between 1.15%3 to 2.15%1 bonus rate</h5>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Metal</PricingCardPlan>
                <PricingCardCost style={{color:"blue"}}>2.15%</PricingCardCost>
<h2> <strong>5%</strong> cash back</h2><br></br>
<p style={{color:"green",marginLeft:"-90px",allignText:"left"}}>2217/2500 spots &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 283 Spots left</p>
<Progress percent={88} status="success" />


                <PricingCardLength></PricingCardLength>
                
                <Button primary>Sign Up Now</Button><br></br>
                <h5 style={{fontSize:"23px",fontFamily:"sans-serif",justifyContent:"space-between",color:"red"}}>I N C L U D E S</h5>
                <PricingCardFeatures>
                
                
                  <PricingCardFeature><p style={{marginLeft:"-90px"}}>&#9989; &nbsp;Charcoal Black Metal Card</p></PricingCardFeature>
                  <PricingCardFeature><p style={{marginLeft:"-20px"}}>&#9989; &nbsp;2.15%1 Bonus Rate Checking Account</p></PricingCardFeature>
                  <PricingCardFeature><p style={{marginLeft:"-46px"}}>&#9989; &nbsp;5% Cash back on brands you love</p></PricingCardFeature>
                  <PricingCardFeature><p style={{marginLeft:"-115px"}}>&#9989; &nbsp;Free Cash Withdrawals</p></PricingCardFeature>
                  <PricingCardFeature><p style={{marginLeft:"-105px"}}>&#9989; &nbsp;Phone and Chat Support</p></PricingCardFeature><br></br>
<p>Fund your account with a minimum opening deposit of $1000. 3 additional free ATM withdrawals per month from out of network ATMs.</p><br></br>
<span style={{fontSize:"25px",marginLeft:"-220px"}}>&#36; </span>&nbsp;<p style={{textDecoration:"line-through",marginTop:"-50px",marginLeft:"-0px"}}>$11.99/m Membershpip Fee</p>

<p style={{fontSize:"35px",color:"green"}}> Free for 6 months <br></br></p>
<p style={{fontSize:"22px",color:"green",marginLeft:"-100px"}}>$ 60 Savings</p>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Premium</PricingCardPlan>
                <PricingCardCost>1.65%</PricingCardCost>
                <h2> <strong>4%</strong> cash back</h2><br></br>
<p style={{color:"green",marginLeft:"-90px",allignText:"left"}}>2000 spots &nbsp; &nbsp;&nbsp;         2000 Spots left</p>
<Progress percent={0} status="success" /><br></br>
                <button type="button" style={{fontSize:"25px",backgroundColor:"#808080",borderRadius:"10px 10px 10px 10px"}} disabled>Choose Plan</button><br></br>
                <h5 style={{fontSize:"23px",fontFamily:"sans-serif",justifyContent:"space-between",color:"green"}}>I N C L U D E S</h5>
                <PricingCardFeatures>


                <PricingCardFeature><p style={{marginLeft:"-90px"}}>&#9989; &nbsp;Charcoal Black Metal Card</p></PricingCardFeature>
                  <PricingCardFeature><p style={{marginLeft:"-20px"}}>&#9989; &nbsp;2.15%1 Bonus Rate Checking Account</p></PricingCardFeature>
                  <PricingCardFeature><p style={{marginLeft:"-46px"}}>&#9989; &nbsp;5% Cash back on brands you love</p></PricingCardFeature>
                  <PricingCardFeature><p style={{marginLeft:"-115px"}}>&#9989; &nbsp;Free Cash Withdrawals</p></PricingCardFeature>
                  <PricingCardFeature><p style={{marginLeft:"-105px"}}>&#9989; &nbsp;Phone and Chat Support</p></PricingCardFeature><br></br>
            <p>    Fund your account with a minimum opening deposit of $500. 2 additional free ATM withdrawals per month from out of network ATMs.</p><br></br>
            <span style={{fontSize:"25px",marginLeft:"-220px"}}>&#36; </span>&nbsp;<p style={{textDecoration:"line-through",marginTop:"-50px",marginLeft:"-0px"}}>$6.99/m Membershpip Fee</p>

                <p style={{fontSize:"35px",color:"#808080"}}> Coming Soon <br></br></p>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Basic</PricingCardPlan>
                <PricingCardCost>1.15%</PricingCardCost>
                <h2> <strong>4%</strong> cash back</h2><br></br>
                <p style={{color:"green",marginLeft:"-90px",allignText:"left"}}>2000 spots &nbsp; &nbsp;&nbsp;         2000 Spots left</p>
<Progress percent={0} status="success" /><br></br>
<button type="button" style={{fontSize:"25px",backgroundColor:"#808080",borderRadius:"10px 10px 10px "}} disabled>Choose Plan</button><br></br>
               
                <h5 style={{fontSize:"23px",fontFamily:"sans-serif",justifyContent:"space-between",color:"green"}}>I N C L U D E S</h5>
                <PricingCardFeatures>
                <PricingCardFeature><p style={{marginLeft:"-140px"}}>&#9989; &nbsp;Free Debit Card</p></PricingCardFeature>
                  <PricingCardFeature><p style={{marginLeft:"-20px"}}>&#9989; &nbsp;1.15%2 Bonus Rate Checking Account</p></PricingCardFeature>
                  <PricingCardFeature><p style={{marginLeft:"-46px"}}>&#9989; &nbsp;3% Cash back on brands you love</p></PricingCardFeature>
                  <PricingCardFeature><p style={{marginLeft:"-115px"}}>&#9989; &nbsp;Free Cash Withdrawals</p></PricingCardFeature>
                  <PricingCardFeature><p style={{marginLeft:"-105px"}}>&#9989; &nbsp;Phone and Chat Support</p></PricingCardFeature><br></br>
                 <p> Fund your account with a minimum opening deposit of $0.</p><br></br>
                 <span style={{fontSize:"25px",marginLeft:"-220px"}}>&#36; </span>&nbsp;<p style={{textDecoration:"none",marginTop:"-50px",marginLeft:"-0px"}}>No Membershpip Fee</p>

<p style={{fontSize:"35px",color:"#808080"}}>Free Forever</p>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
