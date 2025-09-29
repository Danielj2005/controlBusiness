

const DashboardCard =({colClass, colorCard, colorText, title, value, footer}) => {
    return (
        <>
            <div className={colClass}>
                <div className={`card bg-${colorCard} text-${colorText}`}>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h2 className="card-text">{value}</h2>
                        <p className="card-text"><small>{footer}</small></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DashboardCard;