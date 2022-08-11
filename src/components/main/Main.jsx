import React from 'react'
import './main.css'
import goalmain from '../../assets/goalmain.webp'
import zidane from '../../assets/zidane.png'

const Main = () => {
  return (
    <div className='big-intro'>
      
        {/* <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6f8aaa3b5f885aca/62c58cc16cd8543bbe7986e6/GHP_MISSY-BO-KEARNS-02_2-3.jpg?auto=webp&format=pjpg&quality=60&width=768" alt='loading' /> */}
       <div className='introImg'>
            <img src={zidane} alt='loading' />
       </div>
        
       <div className='above'>
           <button className='btnFont'>NXGN</button>
           <h3>Missy Bo Karen: Liverpool born and bred</h3>
       </div>

    </div>
  )
}

export default Main