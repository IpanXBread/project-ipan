import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import '../css/styles.css';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Legend
)

export default function Skills_Coding() {

    const data = {
        labels: ['JavaScript', 'TypeScript', 'Java', 'Phyton', 'HTML', 'CSS', 'Tailwind', 'Bootstrap'],
        datasets: [
            {
                label: 'Proficiency',
                data: [8, 8, 5, 4, 8, 10, 1, 1],
                backgroundColor: '#216F79',
                borderColor: 'rgba(0, 0, 0, 0.4)',
                borderWidth: 2,
            }
        ]
    }

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
                ticks: {
                    fontSize: 16, // Set the font size for the y-axis labels
                },
            },
            x: {
                scales: {
                    x: {
                        barThickness: 5,
                        ticks: {
                            fontSize: 16, // Set the font size for the x-axis labels
                        },
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    font: {
                        size: 20
                    }
                }
            },
            title: {
                display: false,
                text: 'Coding Language',
            },
        },
        layout: {
            padding: {
                left: 20,
                bottom: 20,
            },
        },
        indexAxis: 'x',
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className=''>
            <div className="position-container">
                <h1 className="quicksand big-text ">CODING LANGUAGE</h1>
            </div>
            <div className="coding-container horizontal">
                <div className="coding-container-inside">
                    <Bar
                        data={data}
                        options={options}
                        className="bar-chart quicksand primary-color big-text coding-container-inside"
                    ></Bar>
                </div>
                <div className="half-space-only">
                    <h2 className=" big-text josefin-sans">From Me</h2>
                    <h4 className="normal-text-size quicksand spacing-text text-alignment-little-left primary-color justify-text">
  All modern programming languages are the same. I believe to be efficient in coding is by understanding <span className="bold-text">HOW</span> it works. Even if the syntax is wrong, ChatGPT and StackOverflow are always there to help. Programmers just need to know <span className="bold-text">WHERE</span> to find the answer, <span className="bold-text">WHAT</span> question should be ask, and <span className="bold-text">WHY</span> the solution works. Hence, by understanding coding.
</h4>
                </div>

            </div>
        </div>
    );
}