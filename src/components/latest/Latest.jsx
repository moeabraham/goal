import React from 'react'
import './latest.css';
import jesus from '../../assets/jesus.png'
import {RiTimeLine} from 'react-icons/ri';
import {BiMessageMinus} from 'react-icons/bi';
import {AiOutlineArrowRight} from 'react-icons/ai';


const Latest = () => {
  return (
    <div className='container'>


       <div className='content'> 

            <div className='left'>

                <div className='card'>
                 
                    <div className='image'>
                        <img src={jesus} alt="" />
                    </div>
                    
                    <div className='tags mainTags'>
                        <div className="mainTeamTag"> Manchester City</div>
                        <div className="mainLeagueTag"> Premiere League</div>
                     </div>

                    <div className='imgNews'>
                        <h2>How Liverpool spent over £600m on signings </h2>
                        {/* <p>Lorem Ipsum dasjndasldnasjfoanlak Lorem Ipsum dasjndasldnasjfoanlak Lorem Ipsum dasjndasldnasjfoanlak Lorem Ipsum dasjndasldnasjfoanlak Lorem Ipsum dasjndasldnasjfoanlak Lorem Ipsum dasjndasldnasjfoanlak </p> */}
                    </div>

                    <div className='icons'>
                        <div className='iconsTime'>
                            <RiTimeLine /><span className='tinyTime'>14h</span>
                        </div>
                        <div className='iconsTime'>
                            <BiMessageMinus /><span className='tinyTime'>6</span>
                        </div>
                        <div className='fullStory'>
                         <span>Full Story</span>   <AiOutlineArrowRight className='orangeTxt'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='right'>

                <div className='rightA'>
                    <div className='cardR'>
                        <div className='imageR'>
                            <img src={jesus} alt="" />
                        </div>
                        <div className='tags'>
                            <div className="teamTag"> Manchester City</div>
                        </div>
                        
                        <div className='imgNewsR'>
                            <h3>England make history with eight goals vs Norway  </h3>
                        </div>
                        <div className='iconsR'>
                            <div className='iconsTimeR'>
                                <RiTimeLine /><span className='tinyTimeR'>14h</span>
                            </div>
                            <div className='iconsTimeR'>
                                <BiMessageMinus /><span className='tinyTimeR'>6</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='rightB'>
                    <div className='cardR'>
                            <div className='imageR'>
                               <img src={jesus} alt="" />
                            </div>
                            <div className='tags'>
                                  <div className="teamTag"> Manchester City</div>
                           </div>
                            <div className='imgNewsR'>
                                <h3>Pogba seals Juve return after Man Utd exit  </h3>
                            </div>
                            <div className='iconsR'>
                            <div className='iconsTimeR'>
                                <RiTimeLine /><span className='tinyTimeR'>14h</span>
                            </div>
                            <div className='iconsTimeR'>
                                <BiMessageMinus /><span className='tinyTimeR'>6</span>
                            </div>
                        </div>
                        </div>

                </div>

            </div>
      </div> 

    </div>
  )
}

export default Latest
