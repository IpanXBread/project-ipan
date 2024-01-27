import React, { useState } from 'react';
import Home_Modal from './Home_Modal';
import Tilt from "react-parallax-tilt";
import { useMediaQuery } from 'react-responsive';
import smkdabbImage from "../images/smkdabb.png";
import kmsImage from "../images/kms.png";
import ukmImage from "../images/UKM_white.png";
import '../css/styles.css';
import '../css/Home.css';

export default function Home_Education() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedLevel, setSelectedLevel] = useState('');
    const isMobile = useMediaQuery({ maxWidth: 600 });

    const handleViewGradeButton = (level) => {
        setSelectedLevel(level);
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <>
            {isMobile ? (
                <>
                    <div className='home-content-container'>
                        {/* Title */}
                        <h2 className="font-bold tilt-prism" style={{paddingLeft:"10px", letterSpacing:"2px"}}>EDUCATION</h2>

                        {/* Sort By Row For Each Education */}
                        <div className="space-evenly">
                            {/* SMKDABB */}
                            <Tilt>
                                <div className="gray-box-education">
                                    <div>
                                        <div className="horizontal" style={{ paddingBottom: "20px" }}>
                                            <img src={smkdabbImage} style={{ width: "75px", height: "75px" }} />
                                            <h3 className="centered" style={{ textAlign: 'center', display: "flex", marginLeft: "10px" }}>SMK Dato' Abu Bakar Baginda</h3>
                                        </div>
                                        <div className="centered light-gray-box" style={{ marginRight: "10px" }}>
                                            <p>2014 ~ 2018</p>
                                        </div>

                                        <div>
                                            <p style={{ fontWeight: 'lighter' }}>SPM: 4A 4B 1C</p>
                                        </div>

                                        <div className="centered">
                                            <div class="education-button rajdhani" onClick={() => handleViewGradeButton("sijil_spm")}>
                                                <p className="one-line">View Grade</p>                        </div>
                                        </div>
                                    </div>
                                </div>
                            </Tilt>

                            {/* KMS */}
                            <Tilt>
                                <div className="gray-box-education">
                                    <div>
                                        <div className="horizontal" style={{ paddingBottom: "20px" }}>
                                            <img src={kmsImage} style={{ width: "75px", height: "75px" }} />
                                            <h3 className="centered" style={{ textAlign: 'center', display: "flex", marginLeft: "10px" }}>Kolej Matrikulasi Selangor</h3>
                                        </div>
                                        <div className="centered light-gray-box" style={{ marginRight: "10px" }}>
                                            <p>2019 ~ 2020</p>
                                        </div>
                                        <div className="make-it-bottom">
                                            <p style={{ fontWeight: 'lighter', marginBottom: '-15px' }}>CGPA: 3.79</p>
                                            <p style={{ fontWeight: 'lighter' }}>MUET: Band 4</p>
                                        </div>
                                        <div className="centered">
                                            <div className="education-button rajdhani" onClick={() => handleViewGradeButton("sijil_matrik")}>
                                                <p className="one-line">View Grade</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                            {/* UKM */}
                            <Tilt>
                                <div className="gray-box-education">
                                    <div>
                                        <div className="horizontal" style={{ paddingBottom: "20px" }}>
                                            <img src={ukmImage} style={{ width: "150px", height: "75px" }} />
                                            <h3 className="centered" style={{ textAlign: 'center', display: "flex", marginLeft: "10px" }}>Universiti Kebangsaan Malaysia</h3>
                                        </div>
                                        <div className="centered light-gray-box" style={{ marginRight: "10px" }}>
                                            <p>2020 ~ 2024</p>
                                        </div>
                                        <div className="make-it-bottom">
                                            <p style={{ fontWeight: 'lighter', marginBottom: '-15px' }}>Bachelor's Degree in Computer Science</p>
                                            <p style={{ fontWeight: 'lighter' }}>PNGK: 3.48</p>
                                        </div>
                                        <div className="centered">
                                            <div className="education-button rajdhani" onClick={() => handleViewGradeButton("grade_uni")}>
                                                <p className="one-line">View Grade</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                        </div>

                        {/* Home_Modal */}
                        {modalOpen && <Home_Modal level={selectedLevel} closeModal={closeModal} />}
                    </div>
                </>
            ) : (
                <>
                    <div className='home-content-container'>
                        {/* Title */}
                        <h2 className="font-bold tilt-prism" style={{paddingLeft:"10px", letterSpacing:"2px"}}>EDUCATION</h2>

                        {/* Sort By Row For Each Education */}
                        <div className="space-evenly">
                            {/* SMKDABB */}
                            <Tilt>
                                <div className="gray-box-education">
                                    <div className="smkdabb"></div>
                                    <h3 className="centered" style={{ textAlign: 'center' }}>SMK Dato' Abu Bakar Baginda</h3>
                                    <div className="centered light-gray-box">
                                        <p>2014 ~ 2018</p>
                                    </div>

                                    <div className="make-it-bottom">
                                        <p style={{ fontWeight: 'lighter' }}>SPM: 4A 4B 1C</p>
                                    </div>

                                    <div className="centered">
                                        <div class="education-button rajdhani" onClick={() => handleViewGradeButton("sijil_spm")}>
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
                                        <p>2019 ~ 2020</p>
                                    </div>

                                    <div className="make-it-bottom">
                                        <p style={{ fontWeight: 'lighter', marginBottom: '-15px' }}>CGPA: 3.79</p>
                                        <p style={{ fontWeight: 'lighter' }}>MUET: Band 4</p>
                                    </div>

                                    <div className="centered">
                                        <div class="education-button rajdhani" onClick={() => handleViewGradeButton("sijil_matrik")}>
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
                                        <p>2020 ~ 2024</p>
                                    </div>
                                    <div className="make-it-bottom">
                                        <p style={{ fontWeight: 'lighter', marginBottom: '-15px' }}>Bachelor's Degree in Computer Science</p>
                                        <p style={{ fontWeight: 'lighter' }}>PNGK: 3.48</p>
                                    </div>
                                    <div className="centered">
                                        <div class="education-button rajdhani" onClick={() => handleViewGradeButton("grade_uni")}>
                                            <p className="one-line">View Grade</p>                        </div>
                                    </div>
                                </div>
                            </Tilt>
                        </div>

                        {/* Home_Modal */}
                        {modalOpen && <Home_Modal level={selectedLevel} closeModal={closeModal} />}
                    </div>
                </>
            )
            }
        </>
    );
}