import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import Skills_Coding from '../components/Skills_Coding';
import Skills_Coding_Swipe from '../components/Skills_Coding_Swipe';
import Skills_Editor from '../components/Skills_Editor';
import Skills_Building from '../components/Skills_Building';
import Skills_Trading from '../components/Skills_Trading';
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
      <Skills_Coding_Swipe />

      <Skills_Editor />

      <Skills_Building />

      <Skills_Trading />

      <div className="add-bottom">
        <p className="raleway normal-text-size center-horizontal">You've reached the end of the list</p>
      </div>

      <FooterComponent style={{ zIndex: 2 }} />

    </div>
  );
}
