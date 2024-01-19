import '../css/styles.css';
import tradingImage from '../images/trading.jpg';
import tradingImage2 from '../images/trading2.png';

export default function Skills_Trading() {

    return (
        <div className='add-bottom'>
            <div className="position-container">
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