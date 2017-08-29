import React from "react"

export default ({
    nameText,
    placeholderText,
    typeInput,
    classnameInput,
    spanClassname,
    iClassname,
    handleBlur,
    isValid,
    inputId,
    validation,
    functionRef
}) => {
    return (
        <div>
            <input 
            ref={functionRef}
            placeholder={placeholderText} 
            name={nameText} 
            className={`${classnameInput} ${!isValid ? null : "is-danger"}` }         
            type={typeInput} 
            onBlur={({target: { value }}) => handleBlur(value, inputId, validation)}
            required="" />
            <span 
            className={spanClassname}
            ><i 
            className={iClassname} 
            aria-hidden="true"></i></span>
            {
        !isValid ? null : (<p className="is-danger">"{isValid}"</p>)
        
      }<br />
        </div>
       )
}

