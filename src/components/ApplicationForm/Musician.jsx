import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";

import BioInformation from '../FormPages/BioInformation';
import MusicianSkills from '../FormPages/MusicianSkills';


export const Musician = () => {
  
    const [page, setPage] = useState(0); //sets the page initially at zero
    
    const FormTitles = ["Bio Information", "Skills"];
    
    const PageDisplay = () => {
        if (page === 0) {
            return <BioInformation/>;
        } else if (page === 1) {
            return <MusicianSkills/>
        }
    }

    return (
    <div className='formContainer'>
        <FaArrowLeft 
        disabled={page === 0} 
        onClick={() => {
            setPage((currPage) => currPage - 1);  /**decreases the page state from current page by 1 */
        }}>
        </FaArrowLeft>
        <div className='progress-bar'>
            <div style={{ width: page === 0 ? "50%" : "100%"}} 
            ></div>
        </div> 
        <p>Application Step 2 of 2</p>
        <div className='header'>
            <h1>{FormTitles[page]}</h1>  {/**calls the heading in FormTitles for each page */}
        </div> 
        <div className='body'>{PageDisplay()}</div>

        <button className='footer' 
        disabled={page === FormTitles.length - 1}  /**disables the continue button when the form title equals it's length */
        onClick={() => {
            setPage((currPage) => currPage + 1);  /**increments the page state from current page by 1 */
        }}>
            Continue
        </button>
    </div>
  )
}

export default Musician