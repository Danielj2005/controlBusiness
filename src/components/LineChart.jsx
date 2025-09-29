import { Line } from 'react-chartjs-2';
import { Chart as LineChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip,Legend } from 'chart.js';


// Register Chart.js components
LineChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const LineChart = () => {
    const data = {
        labels:  ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [{
            label: 'Ventas',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: '#FF6384',
        }]
    };
    
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Ventas Mensuales.',
            },
        }
    };
    return ( <Line data={data} options={options} /> )
}


export default LineChart
