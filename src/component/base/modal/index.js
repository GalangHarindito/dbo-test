import "./style.css";

const Modal = ({ show, close, children }) => {
  return (
    <>
      {show && (
        <div className="wrapper-modal">
          <div className="modal-wrapper-dialog">
            <div className="modal-wrapper-body">
              <div className="modal-close">
                <button
                  type="button"
                  className="btn-close btn-close-position "
                  aria-label="Close"
                  onClick={close}
                ></button>
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
