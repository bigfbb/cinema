
const Modal = (props) => {
 
    return (
        <div>
            <div className="overlay"></div>
            <div className="modal">
                <h1>{props.modalMessage}</h1>
                <button onClick={props.hideModal} > Continue</button>
            </div>
        </div>
    )
}
export default Modal;