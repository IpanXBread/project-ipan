import React, { useState } from 'react';
import Modal from './Modal';
import Tilt from "react-parallax-tilt";
import '../css/styles.css';

export default function Home_Education() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState('');

    const handleViewGradeButton = (level) => {
        setSelectedLevel(level);
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div className='education'>
            {/* Title */}
            <h1 className="font-bold">EDUCATION</h1>

            {/* Sort By Row For Each Education */}
            <div className="horizontal space-evenly padding-left-right ">
                {/* SMKDABB */}
                <Tilt>
                    <div className="gray-box-education">
                        <div className="smkdabb"></div>
                        <h3 className="centered" style={{ textAlign: 'center' }}>SMK Dato' Abu Bakar Baginda</h3>
                        <div className="centered light-gray-box">
                            <h4>2014 ~ 2018</h4>
                        </div>

                        <div className="make-it-bottom">
                            <h4 style={{ fontWeight: 'lighter' }}>SPM: 4A 4B 1C</h4>
                        </div>

                        <div className="centered">
                            <div class="download-button rajdhani" onClick={() => handleViewGradeButton("sijil_spm")}>
                                <p className="one-line">View Grade</p>                        </div>
                        </div>
                    </div>
                </Tilt>

                {/* KMS */}
                <Tilt>
                <div className="gray-box-education">
                    <div className="kms"></div>
                    <h3 className="centered" style={{ textAlign: 'center' }}>Kolej Matrikulasi Selangor</h3>
                    <div className="centered light-gray-box">
                        <h4>2019 ~ 2020</h4>
                    </div>

                    <div className="make-it-bottom">
                        <h4 style={{ fontWeight: 'lighter', marginBottom: '-15px' }}>CGPA: 3.79</h4>
                        <h4 style={{ fontWeight: 'lighter' }}>MUET: Band 4</h4>
                    </div>

                    <div className="centered">
                        <div class="download-button rajdhani" onClick={() => handleViewGradeButton("sijil_matrik")}>
                            <p className="one-line">View Grade</p>                        </div>
                    </div>
                </div>
                </Tilt>

                {/* UKM */}
                <Tilt>
                <div className="gray-box-education">
                    <div className="UKM2"></div>
                    <h3 className="centered" style={{ textAlign: 'center' }}>Universiti Kebangsaan Malaysia</h3>
                    <div className="centered light-gray-box">
                        <h4>2020 ~ 2024</h4>
                    </div>
                    <div className="make-it-bottom">
                        <h4 style={{ fontWeight: 'lighter', marginBottom: '-15px' }}>Bachelor's Degree in Computer Science</h4>
                        <h4 style={{ fontWeight: 'lighter' }}>PNGK: 3.48</h4>
                    </div>
                    <div className="centered">
                        <div class="download-button rajdhani" onClick={() => handleViewGradeButton("grade_uni")}>
                            <p className="one-line">View Grade</p>                        </div>
                    </div>
                </div>
                </Tilt>
            </div>

            {/* Modal */}
            {modalOpen && <Modal level={selectedLevel} closeModal={closeModal} />}
        </div>
    );
}