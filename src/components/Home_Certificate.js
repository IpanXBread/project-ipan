import '../css/styles.css';
import sijil_matrik_pertandingan_programming from '../images/sijil_matrik_pertandingan_programming.png';
import sijil_matrik_pal from '../images/sijil_matrik.png';
import redhat1 from '../images/redhat1.png';
import redhat2 from '../images/redhat2.png';

export default function Home_Certificate() {

    const certificates = [
        {
            title: "'Problem Solving And Programming Challenges' Competition",
            imageName: sijil_matrik_pertandingan_programming,
        },
        {
            title: 'Program Peer-Assisted Learning (PAL)',
            imageName: sijil_matrik_pal,
        },
        {
            title: 'Red Hat System Administration I (RH124)',
            imageName: redhat1,
        },
        {
            title: 'Red Hat System Administration II (RH134)',
            imageName: redhat2,
        },
    ];

    return (
        <div className='education'>
            {/* Title */}
            <h1 className="font-bold">CERTIFICATE</h1>

            <div className="centered">
                {certificates.map((certificate, index) => (
                    <div key={index} className="gray-box-certificate">
                        <h2>{certificate.title}</h2>
                        <div className="centered">
                            <img src={certificate.imageName} alt="certificate" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}