import React from "react"
import InputComponent from "./Input"
import ButtonComponent from "./Button"
import * as constants from "./constants"
import * as validations from "./Input/validation"
import "./index.scss"

                            
                            
const inputs = [
    {
        placeholderText: "First Name",
        nameText: "Name",
        classnameInput: "name",
        typeInput: "text",      
        spanClassname: "icon1",
        iClassname: "fa fa-user",
        inputId: constants.INPUT_ID_FIRSTNAME,
        validation: validations.firstNameIsValid    
    },
    {
        placeholderText: "Last Name",
        nameText: "Name",
        classnameInput: "name2",
        typeInput: "text",      
        spanClassname: "icon2",
        iClassname: "fa fa-user",
        inputId: constants.INPUT_ID_LASTNAME,
        validation: validations.lastNameIsValid
    },
    {
        placeholderText: "Phone Number",
        nameText: "Number",
        classnameInput: "number1",
        typeInput: "text",      
        spanClassname: "icon3",
        iClassname: "fa fa-phone",
        inputId: constants.INPUT_ID_PHONE,
        validation: validations.phoneIsValid
    },
    {
        placeholderText: "Email",
        nameText: "mail",
        classnameInput: "mail",
        typeInput: "text",      
        spanClassname: "icon4",
        iClassname: "fa fa-envelope",
        inputId: constants.INPUT_ID_EMAIL,
        validation: validations.emeilIsValid
    },
    {
        placeholderText: "Password",
        nameText: "Password",
        classnameInput: "pass",
        typeInput: "password",      
        spanClassname: "icon5",
        iClassname: "fa fa-unlock",
        inputId: constants.INPUT_ID_PASSWORD,
        validation: validations.passwordIaValid
    },
    {
        placeholderText: "Confirm Password",
        nameText: "Password",
        classnameInput: "pass",
        typeInput: "password",      
        spanClassname: "icon6",
        iClassname: "fa fa-unlock",
        inputId: constants.INPUT_ID_CONFIRM_PASSWORD,
        validation: validations.confirmPasswordIsValid
    }        
]

export default class RegisterContainer extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
                 errors: {}
             }
    }


    handleRegisterClick = async () => {
        const _errors = await Promise.all(inputs.map(async ({ inputId, validation }) => {
          try {
            const value = this[inputId].value
            switch (inputId) {
              case `${constants.INPUT_ID_CONFIRM_PASSWORD}`: {
                const passwordValue = this[constants.INPUT_ID_PASSWORD].value
                await validation(passwordValue, value)
                break
              }
              default: await validation(value)
            }
            return null
          } catch ({ message }) {
            return { [inputId]: message }
          }
        }))
    
        this.setState(() => {
          const errors = _errors.reduce((acc, error) => {
            if (error) acc = { ...acc, ...error }
            return acc
          }, {})
          return { errors }
        })
      }
    
      handlerInputBlur = async (value, inputId, isValid) => {
        try {
          switch (inputId) {
            case `${constants.INPUT_ID_CONFIRM_PASSWORD}`: {
              const passwordValue = this[constants.INPUT_ID_PASSWORD].value
              await isValid(passwordValue, value)
              break
            }
            default: await isValid(value)
          }
          this.setState(({ errors }) => {
            delete errors[inputId]
            return {
              errors: { ...errors }
            }
          })
        } catch ({ message }) {
          this.setState(({ errors }) => ({
            errors: {
              ...errors,
              [inputId]: message
            }
          }))
        }
      }


    render() {
        const { errors } = this.state
        const registerIsDisabled = Object.keys(errors).length
        return (
            <div>
                <div className="header-w3l">
                    <h1>Flat Sign Up Form</h1>
                </div>
                <div className="main-agileits">
                    <h2 className="sub-head">Sign Up</h2>
                    <div className="sub-main">
                        <form action="#" method="post">

                    {
                        inputs.map(({ nameText, placeholderText, validation, inputId, typeInput, classnameInput, spanClassname, iClassname, valueText }, index) => (
                            <span key={index}>
                                     <InputComponent 
                                         functionRef={input => this[inputId] = input} 
                                         handleBlur={this.handlerInputBlur}
                                         isValid={errors[inputId]}
                                         nameText={nameText}
                                         placeholderText={placeholderText}
                                         typeInput={typeInput}
                                         classnameInput={classnameInput}
                                         spanClassname={spanClassname}
                                         iClassname={iClassname}
                                         valueText={valueText}
                                         inputId={inputId}
                                         validation={validation}
                                      />
                                      </span>
                                         ))
                    }
                    <ButtonComponent
                    handleClick={this.handleRegisterClick}
                    isDisabled={registerIsDisabled}
                    typeInput="submit" 
                    valueText="sign up" 
                    />
                        </form>
                    </div>
                        <div className="clear"></div>
                </div>
                    <div className="footer-w3">
                        <p>&copy; 2016 Flat Sign Up Form . All rights reserved | Design by <a href="http://w3layouts.com">W3layouts</a></p>
                    </div>
             </div>
                )
    }
}