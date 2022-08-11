import React from 'react'
import './newsSec.css'
import jesus from '../../assets/jesus.png'
import {AiOutlineArrowRight} from 'react-icons/ai'


const NewsSec = () => {
  return (
    <div className='newSec'>

        <div className='newsContent'>

            <div className='brkNews'>
                <div className="boxes">
                        <div className='box1 box '>
                            <h3> Breaking News</h3>
                            <h5>1 hour ago</h5>
                            <h3> Who is the best footballer in the world ?</h3>

                        </div>
                        <div className='box2 box'>
                            <h5>1 hour ago</h5>
                            <h4> Who is the best footballer in the world ?</h4>

                        </div>
                        <div className='box3 box'>
                            <h5>1 hour ago</h5>
                            <h4> Who is the best footballer in the world ?</h4>

                        </div>
                        <div className='box4 box'>
                            <h5>1 hour ago</h5>
                            <h4> Who is the best footballer in the world ?</h4>

                        </div>
                        <div className='box5 box'>
                            <h5>1 hour ago</h5>
                            <h4> Who is the best footballer in the world ?</h4>

                        </div>
                        <div className='box6 box'>
                            <h5>1 hour ago</h5>
                            <h4> Who is the best footballer in the world ?</h4>

                        </div>
                    
                        <div className='box6 box'>
                            <h5>1 hour ago</h5>
                            <h4> Who is the best footballer in the world ?</h4>

                        </div>
                    
                        <div className='box6 box'>
                            <h5>1 hour ago</h5>
                            <h4> Who is the best footballer in the world ?</h4>

                        </div>
{/*                     
                        <div className='box6 box'>
                            <h5>1 hour ago</h5>
                            <h4> Who is the best footballer in the world ?</h4>

                        </div>
                    
                        <div className='box6 box'>
                            <h5>1 hour ago</h5>
                            <h4> Who is the best footballer in the world ?</h4>

                        </div>
                    
                        <div className='box6 box scroll'>
                            <h5>1 hour ago</h5>
                            <h4> Who is the best footballer in the world ?</h4>

                        </div> */}
                 </div>
                 <div className='fixedBox'>
                            <h4>See All Breaking News</h4><span>
                                 <AiOutlineArrowRight className='orangeTxt'/>
                            </span>
                        </div>

            </div>
            
            <div className='snippets'>
                <div className='latest1 latest'>
                    {/* <img src={} alt=""/>
                    <div></div>
                    <h2></h2> */}
                    <div className='imageNewsSec'>
                        <img src={jesus} alt="" />
                    </div>
                    
                    <div className='tagsNewsSec'>
                        <div className=""> Transfers</div>
                     </div>

                    <div className='headlines'>
                        <h3>
                            blah blah blah @@@
                        </h3>
                    </div>
                </div>
                <div className='latest1 latest'>
                    {/* <img src={} alt=""/>
                    <div></div>
                    <h2></h2> */}
                    <div className='imageNewsSec'>
                        <img src={jesus} alt="" />
                    </div>
                    
                    <div className='tagsNewsSec'>
                        <div className="teamTagNewsSec"> Transfers</div>
                     </div>

                    <div className='headlines'>
                        <h3>
                            blah blah blah @@@
                        </h3>
                    </div>
                </div>
                <div className='latest1 latest'>
                    {/* <img src={} alt=""/>
                    <div></div>
                    <h2></h2> */}
                    <div className='imageNewsSec'>
                        <img src={jesus} alt="" />
                    </div>
                    
                    <div className='tagsNewsSec'>
                        <div className="teamTagNewsSec"> Transfers</div>
                     </div>

                    <div className='headlines'>
                        <h3>
                            blah blah blah @@@
                        </h3>
                    </div>
                </div>

                
                <div className='latest1 latest'>
                    {/* <img src={} alt=""/>
                    <div></div>
                    <h2></h2> */}
                    <div className='imageNewsSec'>
                        <img src={jesus} alt="" />
                    </div>
                    
                    <div className='tagsNewsSec'>
                        <div className="teamTagNewsSec"> Transfers</div>
                     </div>

                    <div className='headlines'>
                        <h3>
                            blah blah blah @@@
                        </h3>
                    </div>
                </div>

                <div className='latest1 latest'>
                    {/* <img src={} alt=""/>
                    <div></div>
                    <h2></h2> */}
                    <div className='imageNewsSec'>
                        <img src={jesus} alt="" />
                    </div>
                    
                    <div className='tagsNewsSec'>
                        <div className="teamTagNewsSec"> Transfers</div>
                     </div>

                    <div className='headlines'>
                        <h3>
                            blah blah blah @@@
                        </h3>
                    </div>
                </div>
                <div className='latest1 latest'>
                    {/* <img src={} alt=""/>
                    <div></div>
                    <h2></h2> */}
                    <div className='imageNewsSec'>
                        <img src={jesus} alt="" />
                    </div>
                    
                    <div className='tagsNewsSec'>
                        <div className="teamTagNewsSec"> Transfers</div>
                     </div>

                    <div className='headlines'>
                        <h3>
                            blah blah blah @@@
                        </h3>
                    </div>
                </div>
                {/* <div className='latest2'></div>
                <div className='latest3'></div>
                <div className='latest4'></div>
                <div className='latest5'></div>
                <div className='latest6'></div> */}
            </div>
            
        {/* <div className='fstRow'>
                fafda
            </div>

            <div className='secRow'>
                fafas
            </div>

            <div className='thrdRow'>
                fadfsa
            </div>

            <div className='fourthRow'>
                fdajfnafda
            </div> */}
        </div>
            
    </div>
  )
}

export default NewsSec