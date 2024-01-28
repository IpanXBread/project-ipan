import React, { useState } from 'react';
import '../css/styles.css';
import '../css/Project.css';

export default function Project_Component_Mobile(props) {
    const { title, company, position, dateRange, image, language, description, align, link } = props;

    const handleShowMessage = (event) => {
        event.preventDefault();
        alert('Page not done yet');
      };

    const renderMiddleSquare = (align, title) => (
        <div className={`middle-${align}-square`}>
            <h3 className="square-big-text chakra-petch">{title}</h3>
            <p></p>
            <p>{dateRange}</p>
        </div>
    );

    const renderContentSquare = (align, company, position, dateRange, image, language, description) => (
        <>
            <div className={`${align}-square`}>
                <h3>♦ {company} ♦</h3>
                <div>
                    <p>{position}</p>
                </div>
                <div className={`${image}`}></div>
                <div className="horizontal">
                    <h4>Language:</h4>
                    <h4 style={{ marginLeft: '10px', textDecoration: 'underline' }}>{language}</h4>
                </div>
                <div className="horizontal">
                    <p>Desc: </p>
                    <p style={{ marginLeft: '10px', textAlign: "justify" }}>{description}</p>
                </div>

                <a className="" style={{ color: "lightgray", textDecoration: "none" }} href={link} target="_blank" rel="noopener noreferrer" onClick={(event) => (link ? null : handleShowMessage(event))}>
                    <div className="project-button one-line"><p>Explore {title}</p></div>
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