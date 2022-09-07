import React from 'react'
// import picture from './qraftlogo.png'

function BioInformation() {
  return (
    <div className='bioInfo-container'>
      {/* <img src={picture} alt='./qraftlogo.png'></img> */}
      <div className='input_field'>
        <span className='details'>First Name</span>
        <input type="text" className='input' placeholder=' first name'/>
      </div> 

      <div className='input_field'>
        <span className='details'>Last Name</span>
        <input type="text" className='input' placeholder=' last name'/>
      </div> 

      <div className='input_field'>
        <span className='details'>Email</span>
        <input type="text" className='input' placeholder=' yourEmail@gmail.com'/>
      </div>  

      <div className='input_field'>
        <span className='details'>Date of Birth</span>
        <input type="date" className='input' />
      </div>

      <div className='input_field'>
        <span className='details'>Location</span>
        <select className='input'>
            <option value=""></option>
            <option value="nigeria">Nigeria</option>
            <option value="kenya">Kenya</option>
            <option value="rwanda">Rwanda</option>
            <option value="uganda">Uganda</option>
          </select>
      </div> 
      
      <div className='input_field'>
        <span className='details'>Phone</span>
        <input type="text" className='input' placeholder=' e.g +1234567890'/>
      </div> 
          
      <div className='gender_info'>
        <input type="radio" name='gender' id='dot-1' />
        <input type="radio" name='gender' id='dot-2' />

        <span className='gender_title'>Gender</span>
        <div className='category'>
          <label for='dot-1'>
            <span className='dot one'></span>
            <span className='gender'>Male</span>
          </label>
          <label for='dot-2'>
            <span className='dot two'></span>
            <span className='gender'>Female</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default BioInformation