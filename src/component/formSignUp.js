import { Fragment, useState } from "react"
import Modal from "./modal/modal"

const SignUpInput = (props) => {
  const [SignUpForm, setSignUpForm] = useState({
    signUpEmailInput: "",
    signUpPasswordInput: ""
  })

  const [showModal, setShowModal] = useState(false)
  const [modalMessage, setModalMessage] = useState("")
  const hideModal=()=>{
      setShowModal(false)

  }

  const submitSignUp = (e) => {
    e.preventDefault();
    const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
    let checker = false;

    for (const user of users) {
      if (user.signUpEmailInput === SignUpForm.signUpEmailInput) {
        checker = true;
      }
    }
    if (checker === true) {
      setShowModal(true)
      setModalMessage("Its complicated but duplicated")
    }
    else {
      users.push(SignUpForm);
      localStorage.setItem('users', JSON.stringify(users));
      console.log(users)
    }

  }


  return (
    <Fragment>
    <form onSubmit={submitSignUp}>
      <input placeholder="Email" type="email" onChange={(e) => setSignUpForm({ ...SignUpForm, signUpEmailInput: e.target.value })}></input>
      <input placeholder="Password" type="password" onChange={(e) => setSignUpForm({ ...SignUpForm, signUpPasswordInput: e.target.value })}></input>
      <button value="submit">submit</button>
    </form>
    {showModal &&( <Modal modalMessage={modalMessage} hideModal={hideModal}  ></Modal>)  }
    </Fragment>
  )
}

export default SignUpInput