import { Fragment, useState } from "react"
import { useNavigate } from "react-router-dom"
import Modal from "./modal/modal"

const LoginInput = (props) => {
    const [logInForm, setLogForm] = useState({
        logInEmailInput: "",
        logInPasswordInput: ""
    })


    const [showModal, setShowModal] = useState(false)
    const [modalMessage, setModalMessage] = useState("")
    const hideModal=()=>{
        setShowModal(false)

    }

    const navigate = useNavigate()

    const submitLogIn = (e) => {
        e.preventDefault();
        const checkUser = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
        if (checkUser.length===0){
            setShowModal(true)
            setModalMessage ("plz sign up first !!!")
        }
        for (const user of checkUser) {
            if ((user.signUpEmailInput === logInForm.logInEmailInput && user.signUpPasswordInput === logInForm.logInPasswordInput)) {
                
                alert (`welcome ${logInForm.logInEmailInput}`)
                localStorage.setItem("isLogged",true)
                navigate("/")

            }
            else{
                setShowModal(true)
                setModalMessage (`User doesn't exist try to signUP`)
            }

        }


        console.log(checkUser)
        console.log(logInForm)

    }

    return (
        <Fragment>
        <form onSubmit={submitLogIn}>
            <input placeholder="Email" type="email" onChange={(e) => setLogForm({ ...logInForm, logInEmailInput: e.target.value })}></input>
            <input placeholder="Password" type="password" onChange={(e) => setLogForm({ ...logInForm, logInPasswordInput: e.target.value })}></input>
            <button>submit</button>
        </form>
        {showModal &&( <Modal modalMessage={modalMessage} hideModal={hideModal}  ></Modal>)  }
        </Fragment>
)
}
export default LoginInput