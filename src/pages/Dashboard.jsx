import {Section} from '../components/Section';
import DashboardCard from '../components/DashboardCard'


const caracteristicasCardDashboard = [
    ["col-12 col-sm-12 col-md-3 col-lg-3", "primary", "white", "Pedidos Hoy", "24", "+5% vs ayer"],
    ["col-12 col-sm-12 col-md-3 col-lg-3", "success", "white", "Ingresos", "$2,450", "+12% vs ayer"],
    ["col-12 col-sm-12 col-md-3 col-lg-3", "secondary", "white", "Productos", "156", "solo por encargo"],
    ["col-12 col-sm-12 col-md-3 col-lg-3", "info", "white", "Clientes", "89", "+3 nuevos hoy"],
    ["col-12 col-sm-12 col-md-3 col-lg-6", "danger", "white", "Pagos", "5", "+3 nuevos hoy"],
    ["col-12 col-sm-12 col-md-3 col-lg-6", "black", "white", "Proveedores", "5", "+3 nuevos hoy"],
];


function Home() {

    return (
        <>
            <Section 
                idSection="dashboard"
                titleSection="Dashboard"
                btn=""
                children={
                    <>
                        <div className="row">
                            {caracteristicasCardDashboard.map((data, index) => (
                                <DashboardCard     
                                    key={index}             
                                    colClass={data[0]}
                                    colorCard={data[1]}
                                    colorText={data[2]}
                                    title={data[3]}
                                    value={data[4]}
                                    footer={data[5]}
                                />
                            ))}
                        </div>
                    </>
                }
            />
        </>
    );
}

export default Home
