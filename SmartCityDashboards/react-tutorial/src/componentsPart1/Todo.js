import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

//creating second component. !!! Always start component function with Capitals
// use State: ReactHook, creates a state React is aware of. Always creates an array of 2 variables
function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;

//{} um JavaScript code auszuführen und nicht HTML (wäre sonst plain text)
//Notice: No function call () on deleteHandler, we just point to it to execute when clicked
//{ modalIsOpen ? <Modal /> : null} = if function (google truthy)
//{ modalIsOpen && <Modal />} if both true, the latter gets called (<Modal /> is always true)
