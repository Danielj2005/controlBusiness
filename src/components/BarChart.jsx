import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip,Legend } from 'chart.js';


// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const BarChart = () => {
    
    const dataProductos = {
        labels: [ ['Producto 1', 'Producto 2', 'Producto 3'],['Producto 1', 'Producto 2', 'Producto 3'],['Producto 1', 'Producto 2', 'Producto 3']],
        datasets: [{
            label: 'Unidades Vendidas',
            data: [65, 59, 80, 81, 56],
            backgroundColor: '#4cc9f0',
        },
        {
            label: 'Unidades Vendidas',
            data: [65, 59, 80, 81, 56],
            backgroundColor: '#4cc9f0',
        },
        {
            label: 'Unidades Vendidas',
            data: [65, 59, 80, 81, 56],
            backgroundColor: '#4cc9f0',
        }
    ],
    };
    
    const optionsProductos = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Ventas Mensuales.',
            },
        },
    };
    return ( <Bar data={dataProductos} options={optionsProductos} /> )
}


export default BarChart
