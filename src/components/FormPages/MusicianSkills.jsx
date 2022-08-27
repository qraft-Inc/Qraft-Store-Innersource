import React from 'react'

export const MusicianSkills = () => {
  return (
    <div className="skills-container">
        <label for="portfolio" >Link to portfolio <span class="required">*</span></label>
        <input type="url" id="portfolio" name="portfolio" />
        <label htmlFor="genre">What Style/Genre of music do you do? <span class="required">*</span>
        <input type="text" list="genre" />
          <datalist id="genre">
            <option>Afro</option>
            <option>Pop</option>
            <option>Reggee</option>
            <option>Blues</option>
          </datalist>
       </label>
       <label for="band">Are you part of any band? <span class="required">*</span></label>
       <input type="text" id="band" name="band"/>
       <label for="portfolio">Link to your social media <span class="required">*</span></label>
      <input type="url" id="portfolio" name="portfolio" placeholder="e.g https://instagram.com"/>
    </div>
  )
}

export default MusicianSkills