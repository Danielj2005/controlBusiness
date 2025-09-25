// "row justify-content-center"

import type { ReactNode } from 'react';

type PROPS = {
    divID ?: string;
    divClass ?: string;
    children?: ReactNode;
}

function Div(prop: PROPS) {
    const {divClass, children} = prop

    return (
        <>
            <div className={divClass}>{children}</div>
        </>
    )
}

export default Div
