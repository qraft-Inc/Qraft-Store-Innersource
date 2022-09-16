import React from 'react'

export const PhotographSkills = () => {
  return (
    <div className="skills-container">
        <label for="portfolio" >Link to portfolio <span class="required">*</span></label>
        <input type="url" id="portfolio" name="portfolio" />
        <label htmlFor="genre">What kind of photography do you do? <span class="required">*</span>
        <input type="text" list="genre" />
          <datalist id="genre">
            <option>Portrait Photography</option>
            <option>Fashion Photography</option>
            <option>Still Life Photography</option>
            <option>Photojournalism</option>
          </datalist>
       </label>
       <label for="band">What is your price range? <span class="required">*</span></label>
       <input type="text" id="band" name="band" placeholder='$10 - $25'/>
       <label for="media">Link to your social media <span class="required">*</span></label>
      <input type="url" id="portfolio" name="portfolio" placeholder="e.g https://instagram.com"/>      
    </div>
  )
}

export default PhotographSkills