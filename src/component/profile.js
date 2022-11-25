import React from "react"
import LoginInput from "./formLogIn"
import SignUpInput from "./formSignUp"
class Profile extends React.Component  {
    constructor(props){
        super()
    }
    render(){
    return (
        <div>
            <h1>Already have an account !</h1>
            <LoginInput></LoginInput>
            <h1>And if you don't!</h1>
            <SignUpInput></SignUpInput>
        </div>
    )
}
}
export default Profile