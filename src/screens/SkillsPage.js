import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import Skills_Coding from '../components/Skills_Coding';
import Skills_Swipe from '../components/Skills_Swipe';
import '../css/styles.css';

export default function SkillsPage() {

  return (
    <div>

      <header><HeaderComponent /></header>

      {/* Title */}
      <div className="center-horizontal super-big-text tilt-prism">
        <h1>SKILLS</h1>
      </div>

      <Skills_Coding />

      <Skills_Swipe />

      <FooterComponent style={{ zIndex: 2 }} />

    </div>
  );
}
