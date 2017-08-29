export const firstNameIsValid = async function (value) {
    const regExp = /^[A-Z][a-z]+$/
    if(!regExp.test(value)) throw new Error ("First name is not valid")
}

export const lastNameIsValid = async function (value) {
    const regExp = /^[A-Z][a-z]+$/
    if(!regExp.test(value)) throw new Error ("Last name is not valid")
}

export const phoneIsValid = async function (value){
    const regExp = /^([0-9]{3}[\-\s]?){2}([0-9]{2}[\-\s]?){2}$/
    if(!regExp.test(value)) throw new Error ("Phone number is not valid")     
}

export const emeilIsValid = async function (value){
    const regExp = /^[a-z0-9\.\_]{3,}\@[a-z]+\.[a-z]{2,}$/i
    if(!regExp.test(value)) throw new Error ("Email is not valid")             
}

export const passwordIaValid = async function (value) {
    const regExp = /^[a-z0-9]{6,}$/i
    if(!regExp.test(value)) throw new Error ("Password is not valid")                     
}

export const confirmPasswordIsValid = async function (passwordValue, value) {
    if (!passwordValue || !value || passwordValue != value) throw new Error("Confirm password is not equal with Password!")
  }
