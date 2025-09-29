

export const Table = (props) => {
    const { tableHeaders, tableBody, children } = props;

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    {tableHeaders.map((header, index) => (<th key={index}>{header}</th>))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {tableBody.map((body, index) => (
                                        <td key={index}>{body[0] == '1' ? <span className="badge bg-success">{body[1]}</span> : body }</td>
                                    ))}
                                    <td>
                                        {children}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
