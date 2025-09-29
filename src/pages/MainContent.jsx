import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import {useState } from 'react'

function MainContent({ children }) {

    const [show, setShow] = useState(false)


    const toggleClick = () => {
        setShow(!show)
    }

    return (

        <>
            <Sidebar active={show} />
            <div className="main-content">
                <Navbar handleSideBar={toggleClick}/>
                <div className="container-fluid py-4 ">
                    {children}
                </div>
            </div>
        </>
    );
}

export default MainContent
