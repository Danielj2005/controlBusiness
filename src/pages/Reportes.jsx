import {Section} from '../components/Section';
import BarChart from '../components/BarChart'
// import LineChart from '../components/LineChart'

function Reportes() {
    return (
        <>
            
            <Section 
                idSection="reportes"
                titleSection="Reportes"
                btn=""
                children={
                    <>
                        <div className="row">
                            {/* <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Ventas por Mes</h5>
                                        {/* <LineChart /> }
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Productos más Vendidos</h5>
                                        <BarChart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
            />
        </>
    )
}

export default Reportes
