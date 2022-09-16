import React from 'react'

export const PainterSkills = () => {
  return (
    <div className="skills-container">
        <label for="portfolio" >Link to portfolio <span class="required">*</span></label>
        <input type="url" id="portfolio" name="portfolio" />
        <label htmlFor="genre">What kind of paintings do you do? <span class="required">*</span>
        <input type="text" list="genre" />
          <datalist id="genre">
            <option>Realism</option>
            <option>Pop Art</option>
            <option>Oil</option>
            <option>Surrealism</option>
          </datalist>
       </label>
       <label for="band">What is your price range? <span class="required">*</span></label>
       <input type="text" id="band" name="band" placeholder='$10 - $25'/>
       <label for="portfolio">Link to your social media <span class="required">*</span></label>
      <input type="url" id="portfolio" name="portfolio" placeholder="e.g https://instagram.com"/>
    </div>
  )
}

export default PainterSkills