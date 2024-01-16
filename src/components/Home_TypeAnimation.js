import { TypeAnimation } from 'react-type-animation';
import '../css/styles.css';

export default function Home_TypeAnimation() {
    return (
        <TypeAnimation
      sequence={[
        'an experienced front end developer.',
        2000,
        'also interested in developing back end.',
        2000,
        'still a fresh grad, looking for job opportunity.',
        2000,
        'currently learning how to code better.',
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
        />
    );
}