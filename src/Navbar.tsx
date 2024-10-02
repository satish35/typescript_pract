
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <>
        <nav>
            <ul style={{display: "flex", flexDirection: "row", padding: "10px 10px"}}>
                <li style={{height: "40px", width: "60px", padding: "7px 10px", background: "black", color: "white"}}>
                    <Link to='/'>Home</Link>
                </li>
                <li style={{height: "40px", width: "60px", padding: "7px 10px", background: "black", color: "white"}}>
                    <Link to='comment'>Comment</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </>
  )
}

export default Navbar