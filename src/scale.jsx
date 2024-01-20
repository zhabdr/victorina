import React, { useState } from "react"

const Scale=(props)=>{
    const [slider,setslider]=useState(0)
    const handleslider=(e)=>{
setslider(e.target.value)

    }
  
    return(
        <div>
            <label htmlFor="scaleInput">Scale:</label>
            <input
            type="range"
            min="0"
            max="100"
            value={slider}
            onChange={handleslider}
            step={10}
            />
            <p>selected value:{slider}</p>

        </div>
    )
}
export default Scale