import { FaTimes } from 'react-icons/fa';
import sijil_spm from '../images/sijil_spm.png';
import sijil_matrik from '../images/sijil_matrik.png';
// import sijil_uni from '../images/sijil_uni.png';

const Modal = ({ level, closeModal }) => {
    console.log("level: ", level);

    let imageSrc;

    if (level === "sijil_spm") {
        imageSrc = sijil_spm;
    } else if (level === "sijil_matrik") {
        imageSrc = sijil_matrik;
    // } else if (level === "sijil_uni") {
    //     imageSrc = sijil_uni;
    } else {
        // Default image or handle other cases
        imageSrc = '';
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <FaTimes className="close-button" onClick={closeModal} />
                </div>
                <div className="centered">
                    <img src={imageSrc} className="gray-box-image centered" alt="no imago yet" />
                </div>
            </div>
        </div>
    );
};

export default Modal;
