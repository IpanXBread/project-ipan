import React, { useState } from 'react';
import '../css/styles.css';
import '../css/Project.css';

export default function Project_Component(props) {
    const { title, company, position, dateRange, image, language, description, align, link } = props;

    const renderMiddleSquare = (align, title) => (
        <div className={`middle-${align}-square`}>
            <p className="square-big-text chakra-petch">{title}</p>
            <p>{dateRange}</p>
        </div>
    );

    const renderContentSquare = (align, company, position, dateRange, image, language, description) => (
        <>
            <div className="vertical-line"></div>
            <div className={`${align}-square`}>
                <h3 className="one-line">♦ {company} ♦</h3>
                <div className="position-container">
                    <p>{position}</p>
                </div>
                <div className={`${image}`}></div>
                <div className="horizontal">
                    <h4>Language:</h4>
                    <h3 style={{ marginLeft: '10px', textDecoration: 'underline' }}>{language}</h3>
                </div>
                <div className="horizontal">
                    <p>Description: </p>
                    <p style={{ marginLeft: '10px' }}>{description}</p>
                </div>

                <a className="" style={{ color: "lightgray", textDecoration: "none" }} href={link} target="_blank" rel="noopener noreferrer">
                    <div className="project-button">Explore {title}</div>
                </a>

            </div>
        </>
    );

    if (align === "left") {
        return (
            <div className={`${align}-container`}>
                {renderContentSquare(align, company, position, dateRange, image, language, description)}
                {renderMiddleSquare(align, props.title)}
            </div>
        );
    } else if (align === "right") {
        return (
            <div className={`${align}-container`}>
                {renderMiddleSquare(align, props.title)}
                {renderContentSquare(align, company, position, dateRange, image, language, description)}
            </div>
        );
    }
}