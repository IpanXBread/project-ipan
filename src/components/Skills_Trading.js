import tradingImage from '../images/trading.jpg';
import tradingImage2 from '../images/trading2.png';
import { useMediaQuery } from 'react-responsive';
import '../css/styles.css';
import '../css/Skills.css';

export default function Skills_Trading() {

const isMobile = useMediaQuery({ maxWidth: 728 });

    return (
        <div className='add-bottom'>
             <div className={`position-container ${isMobile ? 'mobile-position2' : ''}`}>
                <h1 className="quicksand big-text ">TRADING</h1>
                <div className="trading-container">
                    <div style={{ position: 'relative' }} className="cuba-cuba">
                        <img src={tradingImage2} alt="Trading" className="same-size"/>
                        <h4 className="raleway" style={{ position: 'absolute', top: '9%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                            I quit already, haram 😔
                        </h4>
                    </div>

                </div>
            </div>

        </div>
    );
}