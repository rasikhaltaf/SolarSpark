import React from 'react'
import "./gallery.css"

import gal1 from "../../images/gal1.jpg";
import gal2 from "../../images/gallery2.jpg";
import gal3 from "../../images/gal3.jpg";
import gal4 from "../../images/gallery4.jpg";
import gal5 from "../../images/gallery5.jpg";
import gal6 from "../../images/gallery6.jpg";
import gal7 from "../../images/gallery7.jpg";
import gal8 from "../../images/gallery8.jpg";
import gal9 from "../../images/gallery9.jpg";
import gal10 from "../../images/gallery10.jpg";

const Gallary = () => {
  return (
    <>
    <h1 className='gal'>Our Gallery</h1>
      <div className='gallaryContainer'>
        <table>
            <tr>
                <td className='galMain' rowSpan="2" colSpan="2"><img src={gal1}  /></td>
                <td className='gall'><img src={gal2}  /></td>
                <td className='gall'><img src={gal3}  /></td>
            </tr>
            <tr>
            <td className='gall'><img src={gal4}  /></td>
            <td className='gall'><img src={gal5}  /></td>
            </tr>
            <tr>
            <td className='gall'><img src={gal6}  /></td>
            <td className='gall'><img src={gal7}  /></td>
            <td className='galMain' rowSpan="2" colSpan="2"><img src={gal8}  /></td>
                
            </tr>
            <tr>
            <td className='gall'><img src={gal9}  /></td>
            <td className='gall'><img src={gal10}  /></td>
            </tr>
        </table>
      </div>
    </>
  )
}

export default Gallary
