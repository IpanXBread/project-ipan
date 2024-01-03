import { TypeAnimation } from 'react-type-animation';
import '../css/styles.css';

export default function Home_TypeAnimation() {
    return (
        <TypeAnimation
      sequence={[
        'an experienced front end developer.',
        2000,
        'also interested in back end developer.',
        2000,
        'advance in using React Native.',
        2000,
        'currently learning Typescript using React.',
        2000
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
        />
    );
}