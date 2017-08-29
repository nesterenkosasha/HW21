import React from "react"

export default ({ 
    typeInput,
    valueText
 }) => {
    return(
        <input 
        onClick={event => event.preventDefault()}
        type={typeInput} 
        value={valueText} />
    )}
  