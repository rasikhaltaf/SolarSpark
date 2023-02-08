import React from 'react';
import "./topcategories.css"
import elec1 from "../../images/elec1.png";
import solplate from "../../images/solplate.png";
import solfan from "../../images/solfan.png";
import sollight from "../../images/sollight.png";
import soltv from "../../images/soltv.png";



const TopCategories = () => {
  return (
    <>
      <div className='containerCat'>
        <h1>Top Categories</h1>
        <div className='categ'>
        <div className='img1'>
            <img src={elec1} />
            <p>Electronics</p>
            </div>
        <div className='img2'>
        <img src={solplate} />
        <p>Solar Plate</p>
            </div>
        <div className='img3'>
        <img src={solfan} />
        <p>Solar Fan</p>
            </div>
        <div className='img4'>
        <img src={sollight} />
        <p>Solar Light</p>
            </div>
        <div className='img5'>
        <img src={soltv} />
        <p>Solar Tv</p>
            </div>
            
           
   
        </div>
      </div>
    </>
  )
}

export default TopCategories
