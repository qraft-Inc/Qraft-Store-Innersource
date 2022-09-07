import React from 'react'

export const MusicianBio = () => {
  return (
    <div className="skills-container">
         <div className='input_field'>
        <span className='details'>Email</span>
        <input type="text" className='input' placeholder=' yourEmail@gmail.com'/>
      </div>  
      <div className='input_field'>
        <span className='details'>Full Name</span>
        <input type="text" className='input' placeholder=' first name'/>
      </div> 

      <div className='input_field'>
        <span className='details'>Phone Number</span>
        <input type="text" className='input' placeholder=' phoneNumber'/>
      </div> 

      <div className='input_field'>
        <span className='details'>Location</span>
        <input type="text" className='input' placeholder=' kampala'/>
      </div>  

      <button> Continue</button>

        
    </div>
  )
}

export default MusicianBio