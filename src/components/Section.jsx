

export const Section = (props) => {

    const {btn, titleSection, idSection, show=true, children } = props;

    return (
        <>
            <div className={`section ${show ? "" : "d-none"}`} id={idSection}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="mb-4">{titleSection}</h2>
                    {btn}
                </div>
                {children}
            </div>
        </>
    );
}


export const Button = (props) => {
    const { btnClass, iconClass, text, dataBsToggle, dataBsTarget } = props;

    return (
        <>
            <button className={btnClass} data-bs-toggle={dataBsToggle} data-bs-target={dataBsTarget}>
                <i className={iconClass}></i>{text}
            </button>
        </>
    );
}
