import '../css/About.css';
import '../css/styles.css';
import image1 from '../images/1.png';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import image7 from '../images/7.jpg';
import image8 from '../images/8.jpg';

export default function About_Myself() {

    return (
        <div>
            <p>about myself</p>
            <p>From Malaysia</p>
            <p>Work Experience : 21 weeks</p>
            <p>Coding Front-End Experience : 1 year</p>
            <p>"I have no higher connections, here I am working hard, just like everyone else"</p>
            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
            <img src={image4} />
            <img src={image5} />
            <img src={image6} />
            <img src={image7} />
            <img src={image8} />
        </div>
    );
}