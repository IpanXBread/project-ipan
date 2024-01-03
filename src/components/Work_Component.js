import React, { useState } from 'react';
import '../css/styles.css';

const Modal = ({ title, dateRange, image, description, closeModal }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-work">
                {/* Close 'X' button */}
                <div className="modal-close">
                    <span className="close-button" onClick={closeModal}>X</span>
                </div>

                {/* Company Title */}
                <div className="modal-work-header">
                    <h2>{title}</h2>
                </div>

                {/* Logo */}
                <div className="modal-work-header">
                    <div className={`${image}`}></div>
                </div>

                {/* Date */}
                <div className="modal-work-header">
                    <p>{dateRange}</p>
                </div>

                {/* Description */}
                <div className="modal-content">
                    <p>{description}</p>
                </div>

            </div>
        </div>
    );
};

export default function Work_Component(props) {
    const { title, dateRange, image, description } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="quicksand work-title one-line" onClick={openModal}>
                <h2>{title}</h2>
            </div>

            {isModalOpen && (
                <Modal
                    title={title}
                    dateRange={dateRange}
                    description={description}
                    closeModal={closeModal}
                    image={image}
                />
            )}
        </>
    );
}