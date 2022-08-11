import React from 'react'
import './videos.css';

const Videos = () => {
  return (
    <div className="videoContainer">
        <h1>Videos</h1>
        <div className='TopSec'>
            <div className="videoSec">
                <video width="600" height="350" controls>
                    <source src="movie.mp4" type="video/mp4"></source>
                </video>
            </div>
            <div className="videoDesc">
            <div className='tags mainTags'>
                        <div className="mainTeamTag"> Manchester City</div>
                        <div className="mainLeagueTag"> Premiere League</div>
                     </div>

            </div>
        </div>
        <div className="lowerSec">

        </div>
    </div>
  )
}

export default Videos